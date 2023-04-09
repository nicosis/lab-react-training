import React from 'react';
import './FaceBook.css';
import profiles from '../data/berlin.json';

const FaceBook = () =>
  profiles.map((item, index) => (
    <div key={index} className="faceBook-contenedor">
      <img src={item.img} alt={item.firstName} />
      <div className="faceBook-texto">
        <p>
          <b>First name:</b> {item.firstName}
        </p>
        <p>
          <b>Last name:</b> {item.lastName}
        </p>
        <p>
          <b>Country:</b> {item.country}
        </p>
        <p>
          <b>Type:</b> {item.isStudent ? 'Student' : 'Teacher'}
        </p>
      </div>
    </div>
  ));

export default FaceBook;
