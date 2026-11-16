import React from 'react';
export default function PDFReader({ url }: { url: string }): JSX.Element {
  return <p><a className="button button--primary" href={url}>Open or download historical PDF</a></p>;
}
