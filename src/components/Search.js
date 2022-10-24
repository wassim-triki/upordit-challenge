import React from 'react';
import { BiSearch } from 'react-icons/bi';
const Search = () => {
  return (
    <div className="border-2 border-gray-300 flex rounded-sm w-[80%] mx-auto ">
      <input
        className="pl-2 flex-1 border-none outline-none"
        type="text"
        placeholder="Search..."
      />
      <div className="bg-black w-10 h-10 flex items-center justify-center rounded-sm">
        <BiSearch className="text-white text-2xl " />
      </div>
    </div>
  );
};

export default Search;
