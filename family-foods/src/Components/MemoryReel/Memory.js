import React from 'react'
import "./Memory.css";

function Memory({ image, month, year }) {
  return (
    <div className='memory'>
        <h4>{month} {year}</h4>
    </div>
  )
}

export default Memory