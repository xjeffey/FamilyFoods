import React from 'react';
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
        <h1>Memories</h1>
        <h1>Recipes</h1>
        <h1>Requests (X)</h1>
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