// components/Layout.js
import React from "react";
import Sidebar from "components/App-components/sidebar/Sidebar";
import UserNavbar from "components/App-components/sidebar/userNavbar/UserNavbar";

const Layout = ({ children }) => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="w-full flex flex-col">
        <UserNavbar />
        <main className="p-7 font-semibold">{children}</main>
      </div>

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
