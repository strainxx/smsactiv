import React from 'react';
import "./numbers.css";
import GrayButton from '../buttons/graybtn';

const Numbers = ({tgContext, userId}) => {
    return <div className='num-container'>
        <div>Your Numbers</div>
        <GrayButton onClick={()=>{tgContext.showPopup({
            title: "Sms Activate",
            message: "No sms found!"
        })}}>🏴‍☠️ +999,999,9999 (Telegram)</GrayButton>
        <div>Buy Number</div>
        <GrayButton onClick={()=>{tgContext.showConfirm("Buy this number?")}}>🇷🇺 +7 (Telegram)</GrayButton>
        <GrayButton onClick={()=>{tgContext.showConfirm("Buy this number?")}}>🇺🇦 +380 (Telegram)</GrayButton>
    </div>
}

export default Numbers;