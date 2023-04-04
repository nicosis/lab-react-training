import './components.css';

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