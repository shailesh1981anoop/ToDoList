import React from 'react';
import logo from './logo.svg';
import FetchApi from './components/FetchApi';
import './App.css';
import UseMemo from './components/UseMemo';

function App() {
  return (
    <div className="App">
      <h4>Api Fetch Data</h4>
      <FetchApi />
      <UseMemo/>
    </div>
  );
}

export default App;
