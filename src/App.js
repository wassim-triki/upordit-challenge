import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Card from './components/Card';
import Search from './components/Search';
import { getImage, getSearchUsers } from './features/search/searchSlice';

function App() {
  const { users, isLoading, error } = useSelector((store) => store.searchUsers);
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSearchUsers());
  }, []);
  useEffect(() => {
    if (users) {
      users.forEach(({ image_id }) => dispatch(getImage(image_id)));
    }
  }, [users]);
  const handleNextPage = () => {
    setPage((page) => page + 1);
  };
  const handlePreviousPage = () => {
    setPage((page) => page - 1);
  };
  return (
    <div className="App px-32 py-10 flex flex-col gap-5 ">
      <Search page={page} />
      {isLoading && <h1>Loading...</h1>}
      {error && <h1>Error: {error}</h1>}
      <div className="grid py-2 overflow-hidden sm:grid-cols-2 lg:grid-cols-4 grid-cols-1 grid-rows-2 gap-4 ">
        {users.map((user) => (
          <Card key={user.id} {...user} />
        ))}
      </div>
      <div className="flex justify-between w-full">
        <button
          onClick={handleNextPage}
          className="bg-green-400 w-fit px-4 py-2  text-xl text-white rounded-sm"
        >
          Previous
        </button>
        <button
          onClick={handlePreviousPage}
          className="bg-green-400 w-fit px-4 py-2  text-xl text-white rounded-sm"
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default App;
