import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-regular-svg-icons';

const SubNavItems = ({ subMenu }) => {
  return (
    <ul className="nav nav-treeview">
      {subMenu.map((subItem, index) => (
        <li key={index} className="nav-item">
          <a href={subItem.link} className={`nav-link ${subItem.active ? 'active' : ''}`}>
            <FontAwesomeIcon icon={faCircle} className="nav-icon" />
            <p>{subItem.name}</p>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default SubNavItems;
