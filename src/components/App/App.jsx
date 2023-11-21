import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Header from '../Header/Header.jsx';
import Footer from '../Footer/Footer.jsx';
import CompileGuestList from '../GuestList/GuestList.jsx'
import DinnerSupplies from '../DinnerSupplies/DinnerSupplies.jsx';
import GuestForm from '../GuestForm/GuestForm.jsx';
import PartyLeader from '../PartyLeader/PartyLeader.jsx';

function App() {
  let [guestList, setGuestList] = useState([]);


  //On load, get guests
  useEffect(() => {
    getGuests()
  }, [])

  const getGuests = () => {
    axios.get('/guests')
      .then(response => {
        setGuestList(response.data)
      })
      .catch(err => {
        alert('error getting guests');
        console.log(err);
      })
  }

  return (
    <div className="App">
      <Header />
        <PartyLeader leader={guestList[0]}/>
      <h2>Add a new guest</h2>
        <GuestForm getGuests={getGuests} />
      <h2>Guest List</h2>
          <CompileGuestList guestList={guestList}/>
      <h2>Dinner Supplies</h2>
          <DinnerSupplies guestList={guestList}/>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
