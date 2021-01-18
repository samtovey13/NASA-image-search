import React, { useState } from 'react';
import '../styles/App.css';
import Search from './Search';
import SearchResults from './SearchResults';
import getImages from '../requests/getImages';

function App() {
  const [results, setResults] = useState([]);
  const [value, setValue] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setResults(await getImages(value));
  }

  return (
    <div className="App">
      <img 
        className="logo" 
        alt="NASA logo"
        src="https://cdn.cnn.com/cnnnext/dam/assets/200424060716-nasa-worm-logo.jpg" 
        data-testid="NASA-logo"
      />

      <Search setValue={setValue} handleSubmit={handleSubmit} />

      <SearchResults results={results} />
    </div>
  );
}

export default App;
