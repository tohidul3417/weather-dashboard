import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import UnitToggle from "./UnitToggle";

const Header = () => {
  return (
    <header className="bg-blue-500">
      <div className="max-w-7xl md:mx-auto text-white p-4 flex flex-col md:flex-row md:items-center justify-between">
        <div className="flex items-center justify-between space-x-4">
          <Link to="/">
            <h1 className="text-2xl font-bold hover:underline">Weather Dashboard</h1>
          </Link>
          <nav>
          <Link to="/favorites" className="text-lg hover:underline">Favorites</Link>
          </nav>
          
        </div>

        <div className="mt-4 md:mt-0 flex flex-col md:flex-row">
          <SearchBar />
          <UnitToggle />
        </div>
      </div>
    </header>
  );
};

export default Header;
