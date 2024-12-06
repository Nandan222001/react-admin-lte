import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';

const Navbar = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  const toggleSidebar = () => {
    setIsNavExpanded((prev) => !prev);

    if (isNavExpanded) {
      document.body.classList.remove('sidebar-mini', 'sidebar-collapse');
    } else {
      document.body.classList.add('sidebar-mini', 'sidebar-collapse');
    }
  };

  return (
    <nav className="main-header navbar navbar-expand navbar-dark navbar-light">
      <ul className="navbar-nav">
        <li className="nav-item">
          {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
          <button className="nav-link btn btn-link" onClick={toggleSidebar}>
            <FaBars />
          </button>
        </li>
        <li className="nav-item d-none d-sm-inline-block">
          <Link to="home" className="nav-link">Home</Link>
        </li>
        <li className="nav-item d-none d-sm-inline-block">
          <a href="a.com" className="nav-link">Contact</a>
        </li>
        <li className="nav-item d-none d-sm-inline-block">
          <a href="a.com" className="nav-link">About</a>
        </li>
        <li className="nav-item d-none d-sm-inline-block">
          <a href="a.com" className="nav-link">Product</a>
        </li>
        <li className="nav-item d-none d-sm-inline-block">
          <a href="a.com" className="nav-link">Blog</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
