import React, { useState } from 'react';
import './ClickablePicture.css';

const ClickablePicture = (props) => {
  const [cambiarImg, setCambiarImg] = useState(true);
  const handleClick = () => {
    setCambiarImg(!cambiarImg);
  };

  return (
    <div className='img-contenedor'>
      <img onClick={handleClick} src={cambiarImg ? props.img : props.imgClicked } alt="foto" />
    </div>
  );
};

export default ClickablePicture;
