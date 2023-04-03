import './components.css';

//Iteration 1 | Component: IdCard
export const IdCard = (props) => (
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

//Iteration 2 | Component: Greetings
export const Greetings = ({ lang, children }) => {
  if (lang == 'de') {
    return (
      <div className="containerGreetings">
        <span style={{ padding: '5px' }}>Hallo {children}</span>
      </div>
    );
  } else if (lang == 'fr') {
    return (
      <div className="containerGreetings">
        <span style={{ padding: '5px' }}>Bonjour {children}</span>
      </div>
    );
  }
};

//Iteration 3 | Component: Random
export const Random = ({ max, min }) => {
  let random = Math.floor(Math.random() * (max - min + 1)) + min;
  return (
    <div className="containerGreetings">
      Random value between {min} and {max} =&gt; {random}
    </div>
  );
};

//Iteration 4 | Component: BoxColor
const decToHex = (decimalChanel) => {
  const hexNumber = decimalChanel.toString(16);
  return hexNumber.length === 1 ? '0' + hexNumber : hexNumber;
};

export const BoxColor = ({ r, g, b }) => {
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

//Iteration 5 | Component: CreditCard
import visa from './assets/images/cc-visa.svg';
import master from './assets/images/cc-mastercard.svg';

export const CreditCard = (props) => {
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

//Iteration 6 | Component: Rating
import starEmpty from './assets/images/star-regular.svg';
import starFull from './assets/images/star-solid.svg';

const starDB = [
  { '1': starEmpty, '2': starEmpty, '3': starEmpty, '4': starEmpty, '5': starEmpty },
  { '1': starFull, '2': starEmpty, '3': starEmpty, '4': starEmpty, '5': starEmpty },
  { '1': starFull, '2': starFull, '3': starEmpty, '4': starEmpty, '5': starEmpty },
  { '1': starFull, '2': starFull, '3': starFull, '4': starEmpty, '5': starEmpty },
  { '1': starFull, '2': starFull, '3': starFull, '4': starFull, '5': starEmpty },
  { '1': starFull, '2': starFull, '3': starFull, '4': starFull, '5': starFull },
];
export const Rating = ({ children }) => {
  let childRounded = Math.round(children);
  let result = starDB[childRounded];
  childRounded > 5 || childRounded < 0 ? (result = starDB[0]) : null;

  return (
    <div className="rating">
      <img src={result[1]} alt="Star" />
      <img src={result[2]} alt="Star" />
      <img src={result[3]} alt="Star" />
      <img src={result[4]} alt="Star" />
      <img src={result[5]} alt="Star" />
    </div>
  );
};

//Iteration 7 | Component: DriverCard

export const DriverCard = ({ img, name, rating, car }) => {
  return (
    <div className="drive-container">
      <div className="drive-card">
        <div className="drive-card-img">
          <img className="drive-card-img_fit" src={img} />
        </div>
        <div className="drive-card-text">
          <h3>{name}</h3>
          <span>
            <Rating style={{width: '50px'}}>{rating}</Rating>
          </span>
          <p>
            {car.model} - {car.licensePlate}
          </p>
        </div>
      </div>
    </div>
  );
};
