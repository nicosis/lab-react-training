import React, { useState } from 'react';
import './LikeButton.css';

const LikeButton = () => {
  const [likes, setLikes] = useState(0);
  const randomColors = () => {
    const colors = ['purple', 'blue', 'green', 'yellow', 'orange', 'red'];
    return colors[Math.floor(Math.random() * colors.length)];
  };
  let color = randomColors();
  return (
    <div>
      <button
        onClick={() => {
          setLikes(likes + 1);
        }}
        className="likeButton"
        style={{ backgroundColor: color }}
      >
        {likes} Likes
      </button>
    </div>
  );
};

export default LikeButton;
