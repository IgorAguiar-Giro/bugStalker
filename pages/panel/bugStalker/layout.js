// components/Layout.js
import React from "react";
import Sidebar from "components/App-components/sidebar/Sidebar";

const Layout = ({ children }) => {
  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <main className="w-3/4 p-4">{children}</main>
    </div>
  );
};

export default Layout;
