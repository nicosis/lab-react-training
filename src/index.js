import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { IdCard, Greetings } from './components';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <IdCard
      imgSrc='https://randomuser.me/api/portraits/men/52.jpg'
      firstName='Nick'
      lastName='Lenon'
      gender='male'
      height={1.78}
      birth={new Date("1992-07-14").toDateString()}
    />
    <IdCard
      imgSrc='https://randomuser.me/api/portraits/women/44.jpg'
      firstName='Obrien'
      lastName='Lee'
      gender='female'
      height={1.72}
      birth={new Date("1988-05-11").toDateString()}
    />
    <Greetings lang="de" name='Ludwing' />
    <Greetings lang="fr" name='François' />
    {/* <App /> */}
  </React.StrictMode>
);
