import React from 'react'
import './CreditCard.css'

import visa from '../assets/images/cc-visa.svg';
import master from '../assets/images/cc-mastercard.svg';

const CreditCard = (props) => {
  let monthFull = props.expirationMonth.toString();
  if (monthFull.length === 1) monthFull = '0' + monthFull;

  let flag = props.type;
  if (flag === 'Visa') flag = visa;
  else if (flag === 'Master Card') flag = master;
  return (
    <div className="card" style={{ color: `${props.color}`, background: `${props.bgColor}` }}>
      <div className="card-top">
        <img className="card-icon" src={flag} alt="Logo" />
      </div>
      <div className="card-middle">{props.number}</div>
      <div className="card-bottom">
        <span>
          Expires {monthFull}/{props.expirationYear} {props.bank}
        </span>
        <span>{props.owner}</span>
      </div>
    </div>
  );
};

export default CreditCard