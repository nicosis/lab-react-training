import React from 'react';
import './Greetings.css';

const greetingsBD = {
  en: 'hello',
  es: 'hola',
  zh: '你好 (nǐ hǎo)',
  ar: 'مرحبا (marhabaan)',
  hi: 'नमस्ते (namaste)',
  ru: 'Здравствуйте (zdravstvuyte)',
  fr: 'bonjour',
  de: 'hallo',
  it: 'ciao',
  pt: 'olá',
};

const Greetings = ({ lang, children }) => {
  return (
    <div className="containerGreetings">
      <span>
        {greetingsBD[lang]} {children}
      </span>
    </div>
  );
};

export default Greetings;
