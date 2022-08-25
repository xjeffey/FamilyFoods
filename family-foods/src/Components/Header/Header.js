import React from 'react';
import { Link } from 'react-router-dom';
import "./Header.css";
import { AccountCircle, PersonAdd } from '@mui/icons-material';
import { Button, IconButton } from '@mui/material';

function Header() {
  return (
    <div className='header'>
      <div className="header-left">
        <h1>Family Circle Name</h1>
      </div>

      <div className="header-middle">
        <Link className='nav-link' to="/Memories"><h1>Memories</h1></Link>
        <Link className='nav-link' to="/Recipes"><h1>Recipes</h1></Link>
        <Link className='nav-link' to="/Requests"><h1>Requests</h1></Link>
      </div>

      <div className="header-right">
        <IconButton>
          <AccountCircle fontSize='large' />
        </IconButton>
        <Button variant="contained" startIcon={<PersonAdd />}>Invite</Button>
      </div>
    </div>
  )
}

export default Header