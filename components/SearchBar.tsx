import React from 'react';

const SearchIcon = () => (
    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
    </svg>
);

const SearchBar: React.FC = () => {
    return (
        <div className="absolute top-4 left-4 right-4 z-10">
            <div className="relative bg-white rounded-full shadow-lg">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <SearchIcon />
                </div>
                <input
                    type="text"
                    placeholder="Search for a stop, route or bus..."
                    className="w-full py-3 pl-12 pr-4 text-gray-700 bg-transparent rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-400"
                    aria-label="Search for stops or routes"
                />
            </div>
        </div>
    );
};

export default SearchBar;
