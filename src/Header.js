import React from "react";
import Nav from "./Nav";

const Header = () => {
  return (
    <header>
      <h1>My Header</h1>
      <img src="Logo.png" alt="placeholder" width="200" height="50" />
      <Nav />
    </header>
  );
};

export default Header;
