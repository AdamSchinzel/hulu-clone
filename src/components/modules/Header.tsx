import React from "react";
import Menu from "../elements/Menu";
import NavBar from "../elements/NavBar";

const Header: React.FC = () => {
  return (
    <header>
      <div className="flex flex-col sm:flex-row m-5  justify-between items-center h-auto">
        <Menu />
      </div>
      <NavBar />
    </header>
  );
};

export default Header;
