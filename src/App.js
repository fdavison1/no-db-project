import React from 'react';
import './App.css';
import Header from './components/Header'
import Collection from './components/Collection'
import New from './components/New'

function App() {
  return (
    <div className="App">
      <Header />
      <New />
      <Collection />
    </div>
  );
}

export default App;
