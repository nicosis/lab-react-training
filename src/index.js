import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Greetings, Random, CreditCard } from './components';
import IdCard from './components/IdCard';
import BoxColor from './components/BoxColor';
import Rating from './components/Rating';
import DriverCard from './components/DriverCard';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    Iteration 1 | Component: IdCard
    <IdCard
      imgSrc="https://randomuser.me/api/portraits/men/52.jpg"
      firstName="Nick"
      lastName="Lenon"
      gender="male"
      height={1.78}
      birth={new Date('1992-07-14').toDateString()}
    />
    <IdCard
      imgSrc="https://randomuser.me/api/portraits/women/44.jpg"
      firstName="Obrien"
      lastName="Lee"
      gender="female"
      height={1.72}
      birth={new Date('1988-05-11').toDateString()}
    />
    <br />
    Iteration 2 | Component: Greetings
    <Greetings lang="de">Ludwig</Greetings>
    <Greetings lang="fr">François</Greetings>
    <br />
    Iteration 3 | Component: Random
    <Random min={1} max={6} />
    <Random min={2} max={5} />
    <br />
    Iteration 4 | Component: BoxColor
    <BoxColor r={255} g={0} b={0} />
    <BoxColor r={180} g={255} b={0} />
    <br />
    Iteration 5 | Component: CreditCard
    <CreditCard
      type="Visa"
      number="0123456789018845"
      expirationMonth={3}
      expirationYear={2021}
      bank="BNP"
      owner="Maxence Bouret"
      bgColor="#11aa99"
      color="white"
    />
    <CreditCard
      type="Master Card"
      number="0123456789010995"
      expirationMonth={3}
      expirationYear={2021}
      bank="N26"
      owner="Maxence Bouret"
      bgColor="#eeeeee"
      color="#222222"
    />
    <CreditCard
      type="Visa"
      number="0123456789016984"
      expirationMonth={12}
      expirationYear={2019}
      bank="Name of the Bank"
      owner="Firstname Lastname"
      bgColor="#ddbb55"
      color="white"
    />
    <br />
    Iteration 6 | Component: Rating
    <Rating className='rating-custom-base'>0</Rating>
    <Rating className='rating-custom-base'>1.49</Rating>
    <Rating className='rating-custom-base'>1.5</Rating>
    <Rating className='rating-custom-base'>3</Rating>
    <Rating className='rating-custom-base'>4</Rating>
    <Rating className='rating-custom-base'>5</Rating>
    <br />
    Iteration 7 | Component: DriverCard
    <DriverCard
      name="Travis Kalanick"
      rating={4.2}
      img="https://si.wsj.net/public/resources/images/BN-TY647_37gql_OR_20170621052140.jpg?width=620&height=428"
      car={{
        model: 'Toyota Corolla Altis',
        licensePlate: 'CO42DE',
      }}
    />
    <DriverCard
      name="Dara Khosrowshahi"
      rating={4.9}
      img="https://ubernewsroomapi.10upcdn.com/wp-content/uploads/2017/09/Dara_ELT_Newsroom_1000px.jpg"
      car={{
        model: 'Audi A3',
        licensePlate: 'BE33ER',
      }}
    />
    <br />
  </React.StrictMode>
);
