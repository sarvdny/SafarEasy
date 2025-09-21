import React from 'react';
import SearchBar from '../components/SearchBar';
import MapView from '../components/MapView';

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