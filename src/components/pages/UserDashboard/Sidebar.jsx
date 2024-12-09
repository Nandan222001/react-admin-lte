import React from 'react';
import '../../../App.css'; 
import { FaSearch , FaTachometerAlt } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavSideBar from './NavSideBar';
import {FaTh, FaBell, FaUser, FaCog } from 'react-icons/fa';
const Sidebar = () => {

    const menuItems = [
        { 
          name: 'Dashboard',
          icon: FaTachometerAlt,
          link: 'home',
          active: true,
        },
        {
          name: 'Products',
          icon: FaTh,
          link: 'products',
          active: false,
        },
        {
          name: 'Notifications',
          icon: FaBell,
          link: 'notifications.com',
          active: false,
          subMenu: [
            { name: 'Alert 1', link: 'alert1.html', active: false },
            { name: 'Alert 2', link: 'alert2.html', active: false },
          ],
        },
        {
          name: 'User Profile',
          icon: FaUser,
          link: 'profile.com',
          active: false,
        },
        {
            name: 'Reports',
            icon: FaTachometerAlt,
            link: 'reports.com',
            active: false,
            subMenu: [
              { name: 'Sales Report', link: 'sales.html', active: false },
              { name: 'Performance Report', link: 'performance.html', active: false },
            ],
          },
          {
            name: 'Orders',
            icon: FaTh,
            link: 'orders.com',
            active: false,
            subMenu: [
              { name: 'New Orders', link: 'new-orders.html', active: false },
              { name: 'Processed Orders', link: 'processed-orders.html', active: false },
            ],
          },
          {
            name: 'Analytics',
            icon: FaTachometerAlt,
            link: 'analytics.com',
            active: false,
          },
          {
            name: 'Help',
            icon: FaUser,
            link: 'help.com',
            active: false,
          },
          {
            name: 'Integrations',
            icon: FaCog,
            link: 'integrations.com',
            active: false,
            subMenu: [
              { name: 'API Settings', link: 'api-settings.html', active: false },
              { name: 'Webhooks', link: 'webhooks.html', active: false },
            ],
          },
          {
            name: 'Billing',
            icon: FaBell,
            link: 'billing.com',
            active: false,
            subMenu: [
              { name: 'Invoices', link: 'invoices.html', active: false },
              { name: 'Payment Methods', link: 'payment-methods.html', active: false },
            ],
          },
          {
            name: 'Feedback',
            icon: FaTh,
            link: 'feedback.com',
            active: false,
          },
          {
            name: 'FAQs',
            icon: FaUser,
            link: 'faqs.com',
            active: false,
          },
      ];
  return (
    <aside className="main-sidebar sidebar-dark-primary elevation-4">
      <a href="index3.html" className="brand-link">
        <img src="dist/img/AdminLTELogo.png" alt="AdminLTE Logo" className="brand-image img-circle elevation-3" style={{ opacity: 0.8 }} />
        <span className="brand-text font-weight-light"><center>User</center></span>
      </a>

      <div className="sidebar">
        <div className="user-panel mt-3 pb-3 mb-3 d-flex">
          <div className="image">
            <img src="dist/img/user2-160x160.jpg" className="img-circle elevation-2" alt="User Profile" />
          </div>
          <div className="info">
            <a href="asdf.com" className="d-block">
              Nandan Singh
            </a>
          </div>
        </div>

        <div className="form-inline">
          <div className="input-group" data-widget="sidebar-search">
            <input
              className="form-control form-control-sidebar"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <div className="input-group-append">
              {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
              <button className="btn btn-sidebar">
                <FaSearch />
              </button>
            </div>
          </div>
        </div>

        <nav className="mt-2">
          <ul
            className="nav nav-pills nav-sidebar flex-column"
            data-widget="treeview"
            role="menu"
            data-accordion="false"
          >
            <NavSideBar menuItems={menuItems} />
          </ul>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
