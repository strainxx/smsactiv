import React from 'react';
import "./payment.css";
import GrayButton from '../buttons/graybtn';
import { Link } from 'react-router-dom';

const Payment = ({tgContext, userId}) => {
    return <div className='pay-container'>
        <div>Deposit</div>
        <GrayButton onClick={()=>{tgContext.openLink(`https://lzt.market/balance/transfer?username=ChotkiiYT&comment=sms-${userId}&amount=100`)}}>Lolz Payment (Long processing)</GrayButton>
        <div>Crypto bot</div>
        <GrayButton onClick={()=>{tgContext.showPopup({title:"SmsActivate", message: "Soon!"})}}>USDT</GrayButton>
        <Link to={"/crypto"} state={{currency: "TON"}}>
            <GrayButton>TON</GrayButton>
        </Link>
        <GrayButton onClick={()=>{tgContext.showPopup({title:"SmsActivate", message: "Soon!"})}}>BTC</GrayButton>
    </div>
}

export default Payment;