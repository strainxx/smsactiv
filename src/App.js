import { useEffect, useState } from 'react';
import './App.css';
import {Routes, Route} from 'react-router-dom'
import Panel from './components/panel/panel';
import Payment from './components/payment/payment';
import Numbers from './components/numbers/numbers';
import CryptoPayment from './components/payment/crypto';
import PaymentResult from './components/payment/complete';


const tg = window.Telegram.WebApp;
console.log(tg);
function App() {
  const [[userName, userId], setUserName] = useState(['USERNAME', 0]);

  useEffect(() => {
    tg.ready();
    const user = tg.initDataUnsafe?.user;
    if (user) {
      const { first_name, last_name } = user;
      setUserName([`${first_name} ${last_name}`, user.id]);
    }
    console.log(user);
  }, []);
  return (
    <div className="App">
      Sms Activate 🚀
      <Routes>
        <Route index element={<Panel userName={userName} userId={userId} tgContext={tg}/>}/>
        <Route path="dep" element={<Payment tgContext={tg} userId={userId}/>}/>
        <Route path="numbers" element={<Numbers tgContext={tg} userId={userId}/>}/>
        <Route path="crypto" element={<CryptoPayment tgContext={tg} userId={userId}/>}/>
        <Route path="payment/result" element={<PaymentResult tgContext={tg} userId={userId}/>}/>
      </Routes>
    </div>
  );
}

export default App;
