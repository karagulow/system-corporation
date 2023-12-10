import React from 'react';
import { Outlet } from 'react-router-dom';

import { Menu } from '../components/Menu';

export const MainLayout = () => {
  return (
    <div className="main">
      <Menu />
      <Outlet />
    </div>
  );
};
