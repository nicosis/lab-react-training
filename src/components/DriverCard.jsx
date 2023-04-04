import React from 'react';
import Rating from './Rating';
import './DriverCard.css';

const DriverCard = ({ img, name, rating, car }) => {
  return (
    <div className="drive-container">
      <div className="drive-card">
        <div className="drive-card-img">
          <img className="drive-card-img_fit" src={img} />
        </div>
        <div className="drive-card-text">
          <h3>{name}</h3>
          <Rating className='rating-custom'>{rating}</Rating>
          <p>
            {car.model} - {car.licensePlate}
          </p>
        </div>
      </div>
    </div>
  );
};

export default DriverCard;

// export const DriverCard = ({ img, name, rating, car }) => {
//   return (
//     <div className="drive-container">
//       <div className="drive-card">
//         <div className="drive-card-img">
//           <img className="drive-card-img_fit" src={img} />
//         </div>
//         <div className="drive-card-text">
//           <h3>{name}</h3>
//           <div>{/* <Rating className="tamaño">{rating}</Rating> */}</div>
//           <p>
//             {car.model} - {car.licensePlate}
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };
