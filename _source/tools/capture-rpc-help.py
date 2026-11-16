#!/usr/bin/env python3
"""Capture help only from an already running isolated node; never invoke wallet operations.
Usage: python3 tools/capture-rpc-help.py /path/to/yerbas-cli -regtest -datadir=/empty/testdir -rpcport=29898
"""
import json, re, subprocess, sys
from pathlib import Path
cli=sys.argv[1:]
root=Path(__file__).resolve().parents[1]
def rpc(*args):
 return subprocess.check_output(cli+list(args),text=True).strip()
info=json.loads(rpc('getnetworkinfo'))
assert '4.0.1.4' in info['subversion'], info['subversion']
assert json.loads(rpc('getblockchaininfo'))['chain']=='regtest', 'Use an isolated regtest node'
assert info['connections']==0, 'Disable peer networking'
commands={}
category='misc'
for line in rpc('help').splitlines():
 if line.startswith('== '): category=line.strip('= ').lower().replace(' ','-')
 elif line.strip(): commands[line.split()[0]]=category
base=root/'docs/wallet/cli-wallet/commands'
subcommands = ['protx quick_setup', 'protx update_service', 'quorum recovery', 'smartnode status', 'smartnode outputs']
aliases={name.replace(' ', '-'):name for name in subcommands}
existing={aliases.get(p.stem,p.stem):p for p in base.rglob('*.mdx')}
records={}
for name in sorted(set(commands)|set(existing)):
 helptext=rpc('help',*name.split()).replace('127.0.0.1:29898','127.0.0.1:15419')
 if helptext.startswith('help: unknown command'):
  raise RuntimeError('Unknown documented RPC: '+name)
 p=existing.get(name)
 if p is None:
  p=base/commands[name]/(name+'.mdx');p.parent.mkdir(parents=True,exist_ok=True)
 intro=f'# {name}\n\nRPC help captured from **Yerbas Core 4.0.1.4** (`f0e2dde`).\n\nUse `./yerbas-cli help {name}` on your node for help. In the GUI console omit `yerbas-cli`. HTTP examples use mainnet RPC port 15419; network-specific defaults and availability can differ.\n\n'
 if name in ['protx','protx quick_setup']: intro+='The `quick_setup` implementation returns `operatorPublic` and `operatorSecret`; older names in its help result description are inconsistent with the implementation. Keep the secret private.\n\n'
 p.write_text(intro+'```text\n'+'\n'.join(line.rstrip() for line in helptext.splitlines())+'\n```\n')
 records[name]=helptext
(root/'tools/rpc-help-4.0.1.4.json').write_text(json.dumps(records,indent=2)+'\n')
print(f'Captured {len(records)} command help entries; updated {len(existing)} existing routes.')
