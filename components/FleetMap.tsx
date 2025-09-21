
import React, { useState, useEffect } from 'react';
import Map, { Popup } from 'react-map-gl';
import { getLiveBuses } from '../services/mockApi';
import { Bus } from '../types';
import BusMarker from './StatCard'; // Repurposed to BusMarker

// IMPORTANT: Replace with your own Mapbox access token
const MAPBOX_TOKEN = 'pk.eyJ1IjoiZGF2aWR3aGl0ZSIsImEiOiJjanI0M3k5eGgwMDJ5M3lxazQ5NHV5MGJ0In0.S2y5MEO55O2JkIMWim9B2g';

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
