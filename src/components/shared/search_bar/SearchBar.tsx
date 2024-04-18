import React from "react";
import { FaSearch } from "react-icons/fa";

const SearchBar = () => {
  return (
    <form className="flex items-center mx-auto">
      <label htmlFor="simple-search" className="sr-only">
        Search
      </label>
      <div className="relative w-full">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <FaSearch className="w-4 h-4 text-black" />
        </div>
        <input
          type="text"
          id="simple-search"
          className="bg-[#F6F6F9] text-gray-900 text-sm rounded-lg block w-full ps-10 p-2.5  dark:bg-[#F6F6F9] dark:placeholder-gray-400 outline-none"
          placeholder="Search branch name..."
          required
        />
      </div>
      {/* <button
        type="submit"
        className="p-2.5 ms-2 text-sm font-medium text-gray-900 hover:text-white rounded-lg bg-[#D2E4D8] hover:bg-primary"
      >
        <svg
          className="w-4 h-4"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 20 20"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
          />
        </svg>
        <span className="sr-only">Search</span>
      </button> */}
    </form>
  );
};

export default SearchBar;
