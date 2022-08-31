import React from 'react';
import { Link } from 'react-router-dom';
import "./Header.css";
import { AccountCircle, PersonAdd, MenuBook, Home, Feed, Flag } from '@mui/icons-material';
import { Button, IconButton } from '@mui/material';

function Header() {
  return (
    <div className='header'>
      <div className="header__left">
        <h1>Family Circle Name</h1>
      </div>

      <div className="header__middle">
        <div className='header__navLink header__navLink--active'>
          <Home fontSize='large' />
        </div>
        <div className='header__navLink'>
          <MenuBook fontSize='large' />
        </div>
        <div className='header__navLink'>
          <Feed fontSize='large' />
        </div>
        <div className='header__navLink'>
          <Flag fontSize='large' />
        </div>
      </div>

      <div className="header__right">
        <div className="header__profile">
          <IconButton>
            <AccountCircle fontSize='large' />
          </IconButton>
        </div>
    
        <div className="header__invite">
           <Button size="large" variant="contained" startIcon={<PersonAdd />}>Invite</Button>
        </div>
      </div>
    </div>
  )
}

export default Header