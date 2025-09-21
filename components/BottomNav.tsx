import React from 'react';
import { Page } from '../App';

interface BottomNavProps {
    currentPage: Page;
    setCurrentPage: (page: Page) => void;
}

const NavIcon: React.FC<{ path: string; isActive: boolean }> = ({ path, isActive }) => (
    <svg className={`w-6 h-6 mb-1 transition-colors ${isActive ? 'text-indigo-600' : 'text-gray-500'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={path}></path>
    </svg>
);

const navItems = [
    { id: 'map', label: 'Map', iconPath: 'M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13v-6m0 6l6-3m-6 3V7m6 10l5.447 2.724A1 1 0 0021 16.382V5.618a1 1 0 00-1.447-.894L15 7m0 10v-6m0 6l-6-3' },
    { id: 'planner', label: 'Planner', iconPath: 'M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14' },
    { id: 'settings', label: 'Settings', iconPath: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z' },
];

const BottomNav: React.FC<BottomNavProps> = ({ currentPage, setCurrentPage }) => {
    return (
        <nav className="w-full bg-white shadow-t border-t border-gray-200 flex justify-around">
            {navItems.map(item => (
                <button
                    key={item.id}
                    onClick={() => setCurrentPage(item.id as Page)}
                    className="flex flex-col items-center justify-center w-full pt-3 pb-2 text-sm transition-colors"
                >
                    <NavIcon path={item.iconPath} isActive={currentPage === item.id} />
                    <span className={`font-medium ${currentPage === item.id ? 'text-indigo-600' : 'text-gray-500'}`}>
                        {item.label}
                    </span>
                </button>
            ))}
        </nav>
    );
};

export default BottomNav;