import React, { useEffect, useState } from 'react';
import "./crypto.css";
import GrayButton from '../buttons/graybtn';
import { Link, useLocation } from 'react-router-dom';
import { createInvoice } from '../../api/payment';
import CheckMark from "./status/check.svg"
import WaitIcon from "./status/wait.svg"

const PaymentResult = ({tgContext, userId}) => {
    let location = useLocation();
    let currency = location.state.currency;
    let amount = location.state.amount;
    const [plink, setPlink] = useState("Creating...")
    const [res, setResImg] = useState(<img src={WaitIcon} width="250vw" alt="Ye!"/>)
    let created = false;
    useEffect(()=>{
        if(userId!==0 && !created){
            setPlink(createInvoice(userId, amount, currency));
            setResImg(<img src={CheckMark} width="250vw" alt="Ye!"/>)
            created = true;

        }
    }, [currency])

    return (
        <div className='crypto-container'>
            {res}
            Follow this link and pay:
            <div className="codeblock">{plink}</div>
            <GrayButton onClick={()=>{tgContext.showAlert(createInvoice(userId, amount, currency))}}>Check Payment</GrayButton>
        </div>
    )
}

export default PaymentResult;