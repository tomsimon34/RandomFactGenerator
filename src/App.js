import './App.css';
import React, { useState, useEffect } from "react";

const URL = 'https://api.api-ninjas.com/v1/facts';

function App() {
  const [fact, setFact] = useState('Loading random fact...');
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    getRandomFact();
  }, []);

  async function getRandomFact() {
    const response = await fetch(URL, {
      headers: {
        'X-Api-Key': process.env.REACT_APP_NINJAS_API
      }
    });

    const data = await response.json();
    setFact(data[0].fact);
    setCounter(prevCounter => prevCounter + 1);
  }

  return (
    <div className="App">
      <header className="App-header"> {/* Apply styles here */}
        <p>"{fact}"</p>
        <p>Facts generated: {counter}</p>
        <button onClick={getRandomFact}>Generate Random Fact</button>
      </header>
    </div>
  );
}

export default App;
