import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Search from './components/Search';
import config from './config';
import { getSearchUsers } from './features/search/searchSlice';
import generateSignature from './helpers/generateSignature';
import search from './services/search';
import uproditClient from './services/uproditClient';

function App() {
  const { users, isLoading, error } = useSelector((store) => store.searchUsers);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSearchUsers());
    console.log(users);
  }, []);
  return (
    <div className="App p-5">
      <Search />
      {isLoading && <h1>Loading...</h1>}
      {error && <h1>Error: {error}</h1>}
      <ul>{users && users.map((user) => <li>{user.denomination}</li>)}</ul>
    </div>
  );
}

export default App;
