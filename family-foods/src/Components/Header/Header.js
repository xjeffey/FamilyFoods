import React from 'react';
import { Link } from 'react-router-dom';
import "./Header.css";
import { PersonAdd, MenuBook, Home, Feed, Flag } from '@mui/icons-material';
import { Button, IconButton, Avatar, Icon } from '@mui/material';

function Header({ title }) {
  return (
    <div className='header'>
      <div className="header__left">
        <h1>{title}</h1>
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
          <Avatar />
          <h4>User Name</h4>
        </div>
    
        <div className="header__invite">
           <Button size="large" variant="contained" startIcon={<PersonAdd />}>Invite</Button>
        </div>
      </div>
    </div>
  )
}

export default Header