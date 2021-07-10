import React from 'react';

import './Sidebar.css';

export const Sidebar = ({ children }) => {
  return (
    <div className="sidebar">
        { children }
    </div>
  )
}