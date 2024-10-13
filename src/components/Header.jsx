import React from "react";
import SearchBar from "./SearchBar";
import UnitToggle from "./UnitToggle";

const Header = () => {
    return (
        <header>
            <h1>Weather Dashboard</h1>
            <div>
                <SearchBar />
                <UnitToggle />
            </div>
        </header>
    )
};

export default Header;