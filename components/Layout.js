import React from 'react';
import Navbar from './Navbar';

function Layout({ children }) {
  return (
    <>
      <Navbar />
      <div className="container mx-auto px-3">
        {children}
      </div>
    </>
  );
}

export default Layout;
