import React from "react";
import './App.css';
import Header from './Components/Header/Header';
import Memories from './Pages/Memories';
import Recipes from './Pages/Recipes';
import Requests from './Pages/Requests';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />

        <Routes>
          <Route exact path="/Memories" element={<Memories/>}></Route>
          <Route exact path="/Recipes" element={<Recipes/>}></Route>
          <Route exact path="/Requests" element={<Requests/>}></Route>
        </Routes>
        {/* App Body */}
          {/* Side Bar */}
          {/* Feed */}
      </div>
    </Router>
    
  );
}

export default App;
