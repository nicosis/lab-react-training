import React from 'react';
import './IdCard.css'


const IdCard = (props) => {
  return (
    <div className="container">
      <img className="idCard-img" src={props.imgSrc} />
      <div className="texto">
        <strong>First Name: </strong>
        <span>{props.firstName}</span>
      </div>
      <div>
        <strong>Last Name: </strong>
        <span>{props.lastName}</span>
      </div>
      <div>
        <strong>Gender: </strong>
        <span>{props.gender}</span>
      </div>
      <div>
        <strong>Height: </strong>
        <span>{props.height}</span>
      </div>
      <div>
        <strong>Birth: </strong>
        <span>{props.birth}</span>
      </div>
    </div>
  );
};

export default IdCard;
