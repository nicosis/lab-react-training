import React from 'react'
import './Random.css'

const Random = ({ max, min }) => {
  let random = Math.floor(Math.random() * (max - min + 1)) + min;
  return (
    <div className="containerGreetings">
      Random value between {min} and {max} =&gt; {random}
    </div>
  );
};


export default Random