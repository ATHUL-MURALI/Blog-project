import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Import the custom CSS file

const Navbar = () => {
  return (
    <div className="navbar-container">
      <nav className="navbar navbar-expand-lg">
        <div className="collapse navbar-collapse Mainheader Mainheading" id="navbarTogglerDemo01">
          <Link to="/about" className="navbar-brand">
            <h3 className="text-white heading">Vazhi_Pokkan</h3>
          </Link>
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0"></ul>

          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item active nav-item">
              <Link className="nav-link text-white navlnk" to="/">
                Home
              </Link>
            </li>

            <li className="nav-item active nav-item">
              <Link className="nav-link text-white navlnk" to="/read">
                Blog CRUD
              </Link>
            </li>

            <li className="nav-item active nav-item">
              <Link className="nav-link text-white navlnk" to="/login">
                Register
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;