import React from 'react';
import { Outlet } from 'react-router-dom';
import MainContent from './mainContent';

const MainApp = () => {
  return (
    <div>
      
      <Outlet /> {/* This is where the child components will be rendered */}
    </div>
  );
};

export default MainApp;
