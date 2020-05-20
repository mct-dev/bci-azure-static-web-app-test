import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [json, setJson] = React.useState('')
  const fetchIt = async () => {
    const result = await fetch('/api/products')
    const data = await result.text()
    console.log(data)
    setJson(JSON.stringify(json))
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={fetchIt}>Get Api Response From Azure Function</button>
        <p>
          API response: {json}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
