// components/Layout.js
import React from "react";
import Sidebar from "components/App-components/sidebar/Sidebar";

const Layout = ({ children }) => {
  return (
    <div className="flex">
      <Sidebar />

      <main className="p-7 text-2xl font-semibold flex-1 h-screen">
        {children}
      </main>

      <script
        type="module"
        src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"
      ></script>
      <script
        nomodule
        src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"
      ></script>
    </div>
  );
};

export default Layout;
