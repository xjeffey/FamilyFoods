import React from "react";
import './App.css';
import Header from './Components/Header/Header';
import Sidebar from './Components/SideBar/Sidebar'
import Feed from './Components/Feed/Feed';
import Home from './Pages/Home';
import Memories from './Pages/Memories';
import Recipes from './Pages/Recipes';
import Requests from './Pages/Requests';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="app">
      <Header title='The Trans' />

      <div className="app__body">
        <Sidebar />
        <Feed />
        {/* Widgets */}
      </div>
    </div>  
  );
}

export default App;
