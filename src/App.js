import React from 'react';
import { Switch, Route, Link } from 'react-router-dom'
import './App.css';
import Header from './components/Header'
import Display from './components/Display'



function App() {
  return (
    <div className="App">
      <Header />
      <Display />
    </div>
  );
}

export default App;
