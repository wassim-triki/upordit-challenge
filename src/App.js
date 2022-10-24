import { useEffect } from 'react';
import config from './config';
import generateSignature from './helpers/generateSignature';
import search from './services/search';
import uproditClient from './services/uproditClient';

function App() {
  useEffect(() => {
    search();
  }, []);
  return <div className="App"></div>;
}

export default App;
