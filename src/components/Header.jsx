import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light.bg-gradient">
      <div className="container-fluid py-1 ">
        <Link to="/" className="navbar-brand text-danger">
          CHATSEX
        </Link>

        <div className="navbar-nav d-flex flex-row ">
          <Link to="/about" className="nav-link mx-2 text-info">
            Nosotros
          </Link>
          <Link to="/contact" className="nav-link text-info">
            Contacto
          </Link>
        </div>
      </div>
    </nav>
  );
};
