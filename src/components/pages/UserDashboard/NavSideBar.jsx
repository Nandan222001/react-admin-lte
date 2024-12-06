import React, { useState } from 'react';
import { FaAngleLeft } from 'react-icons/fa';
import SubNavItems from './SubNavItems';
import { Link } from 'react-router-dom';

const NavSideBar = ({ menuItems }) => {
  const [expanded, setExpanded] = useState({});

  const toggleSubMenu = (index) => {
    setExpanded((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <>
      {menuItems.map((item, index) => (
        // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
<li key={index} className={`nav-item ${expanded[index] ? 'menu-open' : ''}`}>
          <Link
            to={item.link || '#'}
            className={`nav-link ${item.active ? 'active' : ''}`}
            onClick={(e) => {
              if (item.subMenu) {
                e.preventDefault(); 
                toggleSubMenu(index);
              }
            }}
          >
            <item.icon className="nav-icon" />
            <p>
              {item.name}
              {item.subMenu && (
                <FaAngleLeft
                  className={`right ${expanded[index] ? 'rotate-icon' : ''}`}
                />
              )}
            </p>
          </Link>
          {item.subMenu && expanded[index] && <SubNavItems subMenu={item.subMenu} />}
        </li>
      ))}
    </>
  );
};

export default NavSideBar;
