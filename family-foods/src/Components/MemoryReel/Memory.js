import React from 'react'
import "./Memory.css";
import { Avatar } from "@mui/material";
function Memory({ image, profileSrc, title }) {
  return (
    <div style={{  backgroundImage: `url(${image})` }} className='memory'>
        <Avatar className="memory__avatar" src={profileSrc} />
        <h4>{title}</h4>
    </div>
  )
}

export default Memory