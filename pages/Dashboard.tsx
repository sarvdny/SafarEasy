
import React from 'react';
import SearchBar from '../components/Header'; // Repurposed to SearchBar
import MapView from '../components/FleetMap'; // Repurposed to MapView

const MapPage: React.FC = () => {
    return (
        <div className="relative h-full w-full">
            <SearchBar />
            <MapView />
            {/* StopInfoPanel could be conditionally rendered here */}
        </div>
    );
};

export default MapPage;
