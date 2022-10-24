import { useEffect } from 'react';
import Search from './components/Search';
import config from './config';
import generateSignature from './helpers/generateSignature';
import search from './services/search';
import uproditClient from './services/uproditClient';

function App() {
  useEffect(() => {
    search();
  }, []);
  return (
    <div className="App p-5">
      <Search />
    </div>
  );
}

export default App;
