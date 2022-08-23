import React from 'react';
import "./Header.css";

function Header() {
  return (
    <div className='header'>
      <div className="header_left">
        <h1>Family Circle Name</h1>
      </div>

      <div className="middle">
        <h1>Memories</h1>
        <h1>Recipes</h1>
        <h1>Requests</h1>
      </div>

      <div className="right">
        <h1>Members Here</h1>
        <h1>My Icon</h1>
        <h1>Button</h1>
      </div>
    </div>
  )
}

export default Header