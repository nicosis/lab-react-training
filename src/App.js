import './App.css';
import IdCard from './components/IdCard';
import Greetings from './components/Greetings';
import Random from './components/Random';
import CreditCard from './components/CreditCard';
import BoxColor from './components/BoxColor';
import Rating from './components/Rating';
import DriverCard from './components/DriverCard';
import LikeButton from './components/LikeButton';
import ClickablePicture from './components/ClickablePicture';
import Dice from './components/Dice';
import Carousel from './components/Carousel';
import NumbersTable from './components/NumbersTable';
import FaceBook from './components/FaceBook'

function App() {
  return (
    <div className="App">
      <h1>Iteration 1 | Component: IdCard</h1>
      <br />
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
      <h1>Iteration 2 | Component: Greetings</h1>
      <br />
      <Greetings lang="de">Ludwig</Greetings>
      <Greetings lang="fr">François</Greetings>
      <br />
      <h1>Iteration 3 | Component: Random</h1>
      <br />
      <Random min={1} max={6} />
      <Random min={2} max={5} />
      <br />
      <h1>Iteration 4 | Component: BoxColor</h1>
      <br />
      <BoxColor r={255} g={0} b={0} />
      <BoxColor r={180} g={255} b={0} />
      <br />
      <h1>Iteration 5 | Component: CreditCard</h1>
      <br />
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
      <h1>Iteration 6 | Component: Rating</h1>
      <br />
      <Rating className="rating-custom-base">0</Rating>
      <Rating className="rating-custom-base">1.49</Rating>
      <Rating className="rating-custom-base">1.5</Rating>
      <Rating className="rating-custom-base">3</Rating>
      <Rating className="rating-custom-base">4</Rating>
      <Rating className="rating-custom-base">5</Rating>
      <br />
      <h1>Iteration 7 | Component: DriverCard</h1>
      <br />
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
      <h1>Iteration 8 | State: LikeButton</h1>
      <br />
      <LikeButton />
      <LikeButton />
      <br />
      <h1>Iteration 9 | State: ClickablePicture</h1>
      <br />
      <ClickablePicture img="maxence.png" imgClicked="maxence-glasses.png" />
      <ClickablePicture img="nicosis.png" imgClicked="nicosis-mask.png" />
      <br />
      <h1>Iteration 10 | State: Dice</h1>
      <br />
      <Dice />
      <br />
      <h1>Iteration 11 | State: Carousel</h1>
      <br />
      <Carousel
        images={[
          'https://randomuser.me/api/portraits/women/1.jpg',
          'https://randomuser.me/api/portraits/men/1.jpg',
          'https://randomuser.me/api/portraits/women/2.jpg',
          'https://randomuser.me/api/portraits/men/2.jpg',
        ]}
      />
      <br />
      <h1>Iteration 12 | List and Keys | NumbersTable</h1>
      <br />
      <NumbersTable limit={12} />
      <br />
      <h1>Iteration 13/14 | List and Keys - FaceBook</h1>
      <br />
      <FaceBook />
      <br />
    </div>
  );
}

export default App;
