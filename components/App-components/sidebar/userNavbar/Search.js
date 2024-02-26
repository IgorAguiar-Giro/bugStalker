import React from "react";

const Search = () => {
  return (
    <div className="relative">
      <input
        type="text"
        placeholder="Search..."
        className="block w-full px-10 py-2 rounded-full bg-gray-200 focus:outline-none focus:bg-white focus:shadow-outline"
        // Added left padding to the input
      />
      <button className="absolute right-0 top-0 mt-2 mr-3">
        <svg
          className="w-6 h-6 text-gray-400 border-l border-gray-500"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeWidth="2"
            d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
          />
        </svg>
      </button>
    </div>
  );
};

export default Search;
