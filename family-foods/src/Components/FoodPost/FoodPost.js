import React from 'react';
import './FoodPost.css';

function FoodPost({profilePic, image, username, timestamp, message}) {
  return (
    <div className="foodPost">
      <div className="post__top">
        <p>2:24:00</p>
      </div>
    </div>
  )
}

export default FoodPost