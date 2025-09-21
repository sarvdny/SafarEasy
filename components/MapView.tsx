import React, { useState, useEffect } from 'react';
import Map, { Popup } from 'react-map-gl';
import { getLiveBuses } from '../services/mockApi';
import { Bus } from '../types';
import BusMarker from './BusMarker';

// IMPORTANT: You must replace this with your own Mapbox access token for the map to work.
// You can get a free token from https://www.mapbox.com/
const MAPBOX_TOKEN = 'YOUR_MAPBOX_ACCESS_TOKEN';

const MapView: React.FC = () => {
    const [buses, setBuses] = useState<Bus[]>([]);
    const [selectedBus, setSelectedBus] = useState<Bus | null>(null);

    useEffect(() => {
        const fetchBuses = async () => {
            const busData = await getLiveBuses();
            setBuses(busData);
        };

        fetchBuses();
        const interval = setInterval(fetchBuses, 5000); // Refresh every 5 seconds

        return () => clearInterval(interval);
    }, []);

    if (!MAPBOX_TOKEN || MAPBOX_TOKEN === 'YOUR_MAPBOX_ACCESS_TOKEN') {
        return (
            <div className="flex items-center justify-center h-full bg-gray-200">
                <div className="text-center p-8 bg-white rounded-lg shadow-md">
                    <h2 className="text-xl font-bold text-red-600 mb-2">Map Configuration Error</h2>
                    <p className="text-gray-700">Please provide a valid Mapbox access token in <code className="bg-gray-100 p-1 rounded">components/MapView.tsx</code> to display the map.</p>
                </div>
            </div>
        );
    }

    return (
        <Map
            initialViewState={{
                longitude: 77.5946,
                latitude: 12.9716,
                zoom: 12,
            }}
            style={{ width: '100%', height: '100%' }}
            mapStyle="mapbox://styles/mapbox/streets-v11"
            mapboxAccessToken={MAPBOX_TOKEN}
        >
            {buses.map(bus => (
                <BusMarker key={bus.id} bus={bus} onClick={() => setSelectedBus(bus)} />
            ))}
            
            {selectedBus && (
                <Popup
                    longitude={selectedBus.lng}
                    latitude={selectedBus.lat}
                    onClose={() => setSelectedBus(null)}
                    anchor="bottom"
                    closeButton={false}
                    className="font-sans"
                >
                    <div className="p-1">
                        <h3 className="font-bold text-indigo-700">Route {selectedBus.routeId}</h3>
                        <p className="text-sm text-gray-600">Vehicle: {selectedBus.vehicleId}</p>
                        <p className="text-xs text-gray-500">Speed: {selectedBus.speed} km/h</p>
                    </div>
                </Popup>
            )}
        </Map>
    );
};

export default MapView;