import React from "react";

const Header = () => {
  return (
    <div className=".nav-link:hover">
      <nav className="navbar sticky-top navbar-dark bg-dark  d-flex justify-content-center">
        <h1
          className="text-light  text-center text-center"
          style={{ fontSize: "1.8rem" }}
        >
          Student Management System
        </h1>
      </nav>
    </div>
  );
};

export default Header;
