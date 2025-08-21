import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:4000/api'
});

export async function getMarkings() {
  const { data } = await api.get('/markings');
  return data;
}

export async function exportGeoJSON() {
  const { data } = await api.get('/markings/export/geojson');
  return data;
}

 