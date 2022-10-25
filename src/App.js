import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Card from './components/Card';
import Search from './components/Search';
import config from './config';
import { getImage, getSearchUsers } from './features/search/searchSlice';
import generateSignature from './helpers/generateSignature';
import search from './services/search';
import uproditClient from './services/uproditClient';

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
    </div>
  );
}

export default App;
