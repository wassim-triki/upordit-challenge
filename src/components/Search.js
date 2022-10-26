import React, { useEffect, useState } from 'react';
import { BiSearch } from 'react-icons/bi';
import { useDispatch } from 'react-redux';
import { getSearchUsers } from '../features/search/searchSlice';
import useDebounce from '../hooks/useDebounce';
import { searchQuerySettings } from '../services/search';
const Search = ({ page }) => {
  const [input, setInput] = useState('');
  const handleChange = (e) => setInput(e.target.value);
  const dispatch = useDispatch();
  const debouncedSearch = useDebounce(input, 500);
  useEffect(() => {
    searchQuerySettings.startIndex = Math.abs(page - 1);
    debouncedSearch
      ? (searchQuerySettings.terms = debouncedSearch)
      : delete searchQuerySettings.terms;

    dispatch(getSearchUsers(searchQuerySettings));
  }, [debouncedSearch, page]);
  return (
    <div className="border-2 border-gray-300 flex rounded-sm w-full mx-auto ">
      <input
        className="pl-2 flex-1 border-none outline-none"
        type="text"
        placeholder="Search..."
        value={input}
        onChange={handleChange}
      />
      <div className="bg-black w-10 h-10 flex items-center justify-center rounded-sm">
        <BiSearch className="text-white text-2xl " />
      </div>
    </div>
  );
};

export default Search;
