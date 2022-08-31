import React from "react";
import './App.css';
import Header from './Components/Header/Header';
import Home from './Pages/Home';
import Memories from './Pages/Memories';
import Recipes from './Pages/Recipes';
import Requests from './Pages/Requests';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="app">
      <Header />

      {/* App Body */}
      <div className="app__body">
        {/* Side Bar */}
        {/* Feed */}
      </div>
    </div>  
  );
}

export default App;
