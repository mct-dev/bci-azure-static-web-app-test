import React from 'react';
import './App.css';

function App() {
  const [data, setData] = React.useState('')
  const fetchIt = async () => {
    const result = await fetch('/api/products')
    const data = await result.text()
    console.log(data)
    setData(data)
  }

  return (
    <div className="App">
      <header className="App-header">
        <button style={{ padding: '10px', fontSize: '20px', cursor: 'pointer' }} onClick={fetchIt}>Get Api Response From Azure Function</button>
        <p>
          API response:
        </p>
        <br />
        <p><strong>{data}</strong></p>
      </header>
    </div>
  );
}

export default App;
