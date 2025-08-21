import React from 'react';

type Props = { onExport: () => Promise<void> | void };

export default function ExportButton({ onExport }: Props) {
  return (
    <button onClick={() => void onExport()}>
      Export GeoJSON
    </button>
  );
}

 