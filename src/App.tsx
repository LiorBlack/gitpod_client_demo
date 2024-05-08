import React, { ChangeEvent, useCallback, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [response, setResponse] = useState('response will show up here');
  const [url, setUrl] = useState<string>('https://8080-liorblack-gitpodserverd-e5kuwszxjd6.ws.blackstone-pov.gitpod.cloud');
  const onFetchResponse = useCallback(async () => {
    try {
      const response = await fetch(url ?? '');
      setResponse(await response.text());
    }
    catch (exception) {
      setResponse(`there was an exception with the request: ${exception}`)
    }
  }, [setResponse, url]);
  const onChangeUrl = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setUrl(e.target.value ?? '')
  }, [setUrl]);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <input value={url} onChange={onChangeUrl}/>
        <button onClick={onFetchResponse}>get data from url</button>
        <div style={{fontSize: 10, fontFamily: 'monospace'}}>
        {response}
        </div>
      </header>
    </div>
  );
}

export default App;
