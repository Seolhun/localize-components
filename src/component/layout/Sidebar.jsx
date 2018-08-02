import React from 'react';
import PropTypes from 'prop-types';


import './Sidebar.scss';

const Sidebar = ({ children }) => (
  <aside className="sidebar">
    <div
      className="menu-items"
    >
      {children}
    </div>
  </aside>
);

Sidebar.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Sidebar;
