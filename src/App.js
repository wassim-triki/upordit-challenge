import { useEffect } from 'react';
import config from './config';
import generateSignature from './helpers/generateSignature';
import uproditClient from './services/uproditClient';

function App() {
  const search = async () => {
    const resp = await uproditClient.get(
      config.search + '&startIndex=0&maxResults=20'
    );
    console.log(resp);
  };
  useEffect(() => {
    search();
  }, []);
  return <div className="App"></div>;
}

export default App;
