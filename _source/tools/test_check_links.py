"""Regression checks for build/link validation failures."""
import json
from pathlib import Path
import subprocess
import sys
import tempfile
import unittest

SCRIPT = Path(__file__).with_name('check-links.py')

class LinkChecks(unittest.TestCase):
    def check(self, files, suffix=''):
        with tempfile.TemporaryDirectory() as tmp:
            root = Path(tmp)
            for name, content in files.items():
                target = root / name
                target.parent.mkdir(parents=True, exist_ok=True)
                target.write_text(content)
            result = subprocess.run([sys.executable, str(SCRIPT), str(root / suffix)], capture_output=True, text=True)
            return result.returncode, json.loads(result.stdout)

    def test_missing_directory_fails(self):
        code, report = self.check({}, 'missing')
        self.assertNotEqual(code, 0)
        self.assertIn('does not exist', report['errors'][0][2])

    def test_empty_directory_fails(self):
        code, report = self.check({})
        self.assertNotEqual(code, 0)
        self.assertEqual(report['pages'], 0)

    def test_missing_home_page_fails(self):
        code, _ = self.check({'docs/index.html': '<h1>Docs</h1>'})
        self.assertNotEqual(code, 0)

    def test_valid_relative_resource_and_fragment(self):
        code, report = self.check({'index.html': '<a href="/docs/#heading">Docs</a>', 'docs/index.html': '<h1 id="heading">Docs</h1><img src="../image.svg"><a href="https://example.com">External</a>', 'image.svg': '<svg></svg>'})
        self.assertEqual(code, 0)
        self.assertEqual(report['errors'], [])
        self.assertEqual(report['external_urls'], ['https://example.com'])

    def test_missing_resource_and_fragment_fail(self):
        code, report = self.check({'index.html': '<a href="#missing">Link</a><script src="/missing.js"></script>'})
        self.assertNotEqual(code, 0)
        self.assertEqual({x[2] for x in report['errors']}, {'missing file', 'missing fragment'})

if __name__ == '__main__':
    unittest.main()
