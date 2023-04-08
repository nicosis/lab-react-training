import React from 'react';
import './Greetings.css';

const Greetings = ({ lang, children }) => {
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

export default Greetings;
