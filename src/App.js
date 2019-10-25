import React from 'react';
import './App.css';
import Header from './components/Header'
import routes from './routes'
import Display from './components/Display'


function App() {
  return (
    <div className="App">
      <Header />
      <Display />
      {/* {routes} */}
    </div>
  );
}

export default App;
