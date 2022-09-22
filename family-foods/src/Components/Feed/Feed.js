import React from 'react';
import './Feed.css';
import '../MemoryReel/MemoryReel';
import MemoryReel from '../MemoryReel/MemoryReel';
import FoodPost from '../FoodPost/FoodPost';

function Feed() {
  return (
    <div className='feed'>
        <MemoryReel />
        <FoodPost />
    </div>
  )
}

export default Feed