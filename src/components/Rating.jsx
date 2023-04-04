import React from 'react';
import './Rating.css'

const Rating = ({children, className}) => {
  const numberOfStars = Math.round(children);

  let string = '★';
  string = string.repeat(numberOfStars).padEnd(5, '☆');

  return (
    <div >
      <span className={className}>{string}</span>
    </div>
  );
};

export default Rating;

//Iteration 6 | Component: Rating
// import starEmpty from './assets/images/star-regular.svg';
// import starFull from './assets/images/star-solid.svg';

// const starDB = [
//   { '1': starEmpty, '2': starEmpty, '3': starEmpty, '4': starEmpty, '5': starEmpty },
//   { '1': starFull, '2': starEmpty, '3': starEmpty, '4': starEmpty, '5': starEmpty },
//   { '1': starFull, '2': starFull, '3': starEmpty, '4': starEmpty, '5': starEmpty },
//   { '1': starFull, '2': starFull, '3': starFull, '4': starEmpty, '5': starEmpty },
//   { '1': starFull, '2': starFull, '3': starFull, '4': starFull, '5': starEmpty },
//   { '1': starFull, '2': starFull, '3': starFull, '4': starFull, '5': starFull },
// ];
// export const Rating = ({ children }) => {
//   let childRounded = Math.round(children);
//   let result = starDB[childRounded];
//   childRounded > 5 || childRounded < 0 ? (result = starDB[0]) : null;

//   return (
//     <div className="rating">
//       <img src={result[1]} alt="Star" />
//       <img src={result[2]} alt="Star" />
//       <img src={result[3]} alt="Star" />
//       <img src={result[4]} alt="Star" />
//       <img src={result[5]} alt="Star" />
//     </div>
//   );
// };