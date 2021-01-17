import React from 'react';
import '../styles/App.css';
import Search from './Search';

function App() {
  return (
    <div className="App">
      <img 
        className="logo" 
        alt="NASA logo"
        src="https://cdn.cnn.com/cnnnext/dam/assets/200424060716-nasa-worm-logo.jpg" 
        data-testid="NASA-logo"
      />
      <Search />
    </div>
  );
}

export default App;
