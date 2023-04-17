import React, { useState } from 'react';
import './FaceBook.css';
import profiles from '../data/berlin.json';

const FaceBook = () => {
  const [countrySel, setCountrySel] = useState('');
  const countries = [...new Set(profiles.map((itm) => itm.country))];
  console.log(countrySel);

  const handleclick = (e) => {
    setCountrySel(e.target.value);
  };

  return (
    <div className="facebook-contenedor">
      {countries.map((itm, ind) => (
        <button style={{ padding: '3px', margin: '2px' }} key={ind} value={itm} onClick={(e) => handleclick(e)}>
          {itm}
        </button>
      ))}
      {profiles.map((itm, ind) => (
        <div key={ind} className={` facebook-card-contenedor ${countrySel === itm.country ? 'bg' : ''} `}>
          <img src={itm.img} alt={itm.firstName} />
          <div className="faceBook-texto">
            <p>
              <b>First name:</b> {itm.firstName}
            </p>
            <p>
              <b>Last name:</b> {itm.lastName}
            </p>
            <p>
              <b>Country:</b> {itm.country}
            </p>
            <p>
              <b>Type:</b> {itm.isStudent ? 'Student' : 'Teacher'}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FaceBook;
