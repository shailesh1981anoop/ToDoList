import React from 'react';
import logo from './logo.svg';
import FetchApi from './components/FetchApi';
import './App.css';
import UseMemo from './components/UseMemo';
import { BrowserRouter,Route,Routes } from "react-router-dom";
import AddForm from './components/AddForm';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<AddForm />} />
            <Route path="/UseMemo" element={<UseMemo />} />
          </Routes>
        </BrowserRouter>
      {/* <UseMemo/> */}
    </div>
  );
}

export default App;
