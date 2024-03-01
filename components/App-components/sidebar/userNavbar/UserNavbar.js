import React, { useState } from "react";
import Search from "./Search";

const UserNavbar = () => {
  const userRole = "Admin";
  const userName = "Hadley Cunningham";
  const userProfilePicture = (
    <img
      src="http://tinyurl.com/4up5wbfh"
      alt="User Profile"
      className="rounded-full w-8 h-8 object-cover cursor-pointer"
    />
  );

  const [open, setOpen] = useState(false);

  return (
    <nav className="relative flex justify-between items-center bg-gray-100 shadow-md p-5">
      <div className="text-gray-800 hidden md:block">
        Logged in as: <span className="font-bold">{userRole}</span>
      </div>

      {/* Search bar */}
      <div className="md:flex-1 md:ml-4">
        <Search />
      </div>

      {/* User profile */}
      <div
        className={`md:flex md:items-center  md:pb-0 pb-2 ${
          open ? "block" : "hidden"
        } flex-col-reverse md:flex-row`}
      >
        <div className="md:ml-4 md:mr-4">
          <div className="md:hidden flex items-center flex-col ">
            <span className="font-bold">{userRole}</span>
            {userProfilePicture}
            <span className="p-2">{userName}</span>
            <button>Logout</button>
          </div>
        </div>
        <div className="hidden md:flex items-center">
          {userProfilePicture}
          <span className="p-2">{userName}</span>
        </div>
      </div>

      {/* Hamburger menu */}
      <div className="md:hidden">
        <button
          onClick={() => setOpen(!open)}
          className="text-gray-800 hover:text-gray-500 focus:outline-none"
        >
          <ion-icon name={open ? "close" : "menu"}></ion-icon>
        </button>
      </div>
    </nav>
  );
};

export default UserNavbar;
