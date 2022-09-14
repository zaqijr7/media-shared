import React from 'react';

function Layout({ children }) {
  return (
    <div className="container mx-auto px-3">
      {children}
    </div>
  );
}

export default Layout;
