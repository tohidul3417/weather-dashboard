import React from "react";
import SearchBar from "./SearchBar";
import UnitToggle from "./UnitToggle";

const Header = () => {
    return (
        <header className="bg-blue-500">
            <div className="max-w-7xl mx-auto text-white p-4 flex flex-col md:flex-row items-center justify-between">
            <h1 className="text-2xl font-bold">Weather Dashboard</h1>
            <div className="mt-4 md:mt-0">
                <SearchBar />
                <UnitToggle />
            </div>
            </div>
           
        </header>
    )
};

export default Header;