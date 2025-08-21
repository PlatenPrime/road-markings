import React, { useEffect, useState } from 'react';
import MapGL from 'react-map-gl';
import { getMarkings, exportGeoJSON } from '../lib/markingApi';
import MarkingModal from './MarkingModal';

export default function Map() {
  const [markings, setMarkings] = useState<any[]>([]);
  const [selected, setSelected] = useState<any>(null);

  useEffect(() => {
    fetchMarkings();
  }, []);

  const fetchMarkings = async () => {
    const data = await getMarkings();
    setMarkings(data);
  };

  const handleExport = async () => {
    const data = await exportGeoJSON();
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'road_markings.geojson';
    link.click();
  };

  return (
    <div>
      <button onClick={handleExport}>Export GeoJSON</button>
      <MapGL
        initialViewState={{ longitude: 37.62, latitude: 55.75, zoom: 10 }}
        style={{ width: '100%', height: '100vh' }}
        mapboxAccessToken={import.meta.env.VITE_MAPBOX_TOKEN}
        mapStyle="mapbox://styles/mapbox/streets-v12"
      >
        {/* TODO: add sources/layers for markings */}
      </MapGL>
      {selected && <MarkingModal marking={selected} onClose={() => setSelected(null)} />}
    </div>
  );
}

 