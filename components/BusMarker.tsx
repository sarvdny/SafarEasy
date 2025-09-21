import React from 'react';
import { Marker } from 'react-map-gl';
import { Bus } from '../types';

interface BusMarkerProps {
    bus: Bus;
    onClick: (bus: Bus) => void;
}

const BusMarker: React.FC<BusMarkerProps> = ({ bus, onClick }) => {
    return (
        <Marker longitude={bus.lng} latitude={bus.lat} anchor="center" onClick={() => onClick(bus)}>
            <div
                className="w-6 h-6 bg-indigo-600 rounded-full flex items-center justify-center border-2 border-white shadow-md cursor-pointer transform hover:scale-110 transition-transform"
                style={{ transform: `rotate(${bus.bearing}deg)` }}
                title={`Bus ${bus.vehicleId} (Route ${bus.routeId})`}
            >
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-2.5a1 1 0 01.97 0l5 2.5a1 1 0 001.17-1.409l-7-14z"></path>
                </svg>
            </div>
        </Marker>
    );
};

export default BusMarker;