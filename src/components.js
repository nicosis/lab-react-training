import './components.css';

export const IdCard = (props) => (
  <div className='container'>
    <img src={props.imgSrc} />
    <div className='texto'>
      <strong>First Name: </strong><span>{props.firstName}</span>
    </div>
    <div>
      <strong>Last Name: </strong><span>{props.lastName}</span>
    </div>
    <div>
      <strong>Gender: </strong><span>{props.gender}</span>
    </div>
    <div>
      <strong>Height: </strong><span>{props.height}</span>
    </div>
    <div>
      <strong>Birth: </strong><span>{props.birth}</span>
    </div>
  </div>
);

export const Greetings = (props) => {

  if (props.lang === 'de') {
    return (<div className='containerGreetings'>
      <div>
        <span style={{ padding: '5px' }}>Hallo {props.name}</span>
      </div>
    </div>)
  } else if (props.lang === 'fr') {
    return (<div className='containerGreetings'>
      <div>
        <span style={{ padding: '5px' }}>Bonjour {props.name}</span>
      </div>
    </div>)
  }
};
// export default Greetings;