import { useEffect } from 'react';
import L from 'leaflet';
import { OpenStreetMapProvider } from 'leaflet-geosearch';
import 'leaflet/dist/leaflet.css'; // Make sure to import Leaflet's CSS

const Map = () => {  
    useEffect(() => {
    // Initialize map
    const map = L.map('map', {
      center: [51.505, -0.09], // Default center (London)
      zoom: 13,
    });

    // Add OpenStreetMap tile layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    // Geocoding service to convert address to coordinates
    const provider = new OpenStreetMapProvider();
    const address = '1600 Pennsylvania Ave NW, Washington, DC'; // Address to locate

    // Geocode the address to get coordinates
    provider.search({query:address}).then((results) => {
      const result = results[0]; // Get the first result (best match)
      const lat = result.y;
      const lon = result.x;

      // Add marker and tooltip at the given address
      const marker = L.marker([lat, lon]).addTo(map);
      marker.bindTooltip(`<b>${address}</b>`).openTooltip();

      // Adjust the map center and zoom to the marker
      map.setView([lat, lon], 15); // Zoom level 15 for a closer look
    });

    return () => {
      // Cleanup map instance on component unmount
      map.remove();
    };
  }, []);

  return <div id="map" style={{ width: '100%', height: '500px' }}></div>;
}

export default Map