import React from 'react';
import './App.css';

function App() {
  const [data, setData] = React.useState('')
  const [name, setName] = React.useState('')

  const fetchIt = async () => {
    const result = await fetch(`/api/products?name=${name}`)
    const data = await result.text()
    console.log(data)
    setData(data)
  }

  const inputStyle = {
    fontSize: '18px',
    padding: '5px',
    marginBottom: '20px'
  }

  return (
    <div className="App">
      <header className="App-header">
        <input style={inputStyle} type="text" placeholder="Enter a name..." onChange={(e) => setName(e.target.value)} />
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
