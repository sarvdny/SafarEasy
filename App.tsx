import React, { useState } from 'react';
import BottomNav from './components/BottomNav';
import MapPage from './pages/MapPage';
import PlannerPage from './pages/PlannerPage';
import SettingsPage from './pages/SettingsPage';


export type Page = 'map' | 'planner' | 'settings';

const App: React.FC = () => {
    const [currentPage, setCurrentPage] = useState<Page>('map');

    const renderPage = () => {
        switch (currentPage) {
            case 'map':
                return <MapPage />;
            case 'planner':
                return <PlannerPage />;
            case 'settings':
                return <SettingsPage />;
            default:
                return <MapPage />;
        }
    };

    return (
        <div className="h-full w-full flex flex-col font-sans">
            <main className="flex-1 overflow-hidden">
                {renderPage()}
            </main>
            <BottomNav currentPage={currentPage} setCurrentPage={setCurrentPage} />
        </div>
    );
};

export default App;