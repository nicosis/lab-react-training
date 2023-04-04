import React from 'react';
import './BoxColor.css';

const decToHex = (decimalChanel) => {
  const hexNumber = decimalChanel.toString(16);
  return hexNumber.length === 1 ? '0' + hexNumber : hexNumber;
};

const BoxColor = ({ r, g, b }) => {
  return (
    <div className="box" style={{ backgroundColor: `rgb(${r}, ${g}, ${b}` }}>
      <span>
        rgb({r},{g},{b})
      </span>
      <span>
        #{decToHex(r)}
        {decToHex(g)}
        {decToHex(b)}
      </span>
    </div>
  );
};

export default BoxColor;
