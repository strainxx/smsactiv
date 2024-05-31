import React, { useEffect, useState } from 'react';
import "./panel.css"
import DefaultButton from '../buttons/button'
import { Link } from 'react-router-dom';
import {getMe} from "../../api/payment.js"

const Panel = ({userName, userId, tgContext}) => {
    const [balance, setBalance] = useState("...");
    let updated = false;
    useEffect(() => {
        if(userId!==0 && !updated){
            updated = true;
            // tgContext.showAlert(userId)
            getMe(userId)
                .then(data => {
                    setBalance(`${data.balance} $`);
                })
                .catch(error => {
                    console.error("Error fetching balance:", error);
                    throw error
                    setBalance("Error! Try /start");
                })
            
        }
    });
    return (
        <div className={"panel"}>
            <div className='heading'>
                <div>👋 {userName}</div>
                <div>Balance: {balance}</div>
            </div>
            <div className='buttons'>
                <Link to="numbers">
                    <DefaultButton>Buy Telegram Number</DefaultButton>
                </Link>
                <Link to="/dep">
                    <DefaultButton>Deposit</DefaultButton>
                </Link>
                <DefaultButton onClick={()=>{tgContext.showAlert(userId)}}></DefaultButton>
            </div>
        </div>
    )
}

export default Panel;