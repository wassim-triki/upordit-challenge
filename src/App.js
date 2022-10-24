import { useEffect } from 'react';
import generateSignature from './helpers/generateSignature';

function App() {
  useEffect(() => {
    console.log(
      generateSignature('https://api.uprodit.com/v2/profile/personal/en/51')
    );
  }, []);
  return <div className="App"></div>;
}

export default App;
