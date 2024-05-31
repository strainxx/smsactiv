import React, { useState } from 'react';
import "./crypto.css";
import GrayButton from '../buttons/graybtn';
import { Link, useLocation } from 'react-router-dom';
import { createInvoice } from '../../api/payment';

const CryptoPayment = ({tgContext, userId}) => {
    let location = useLocation();
    let currency = location.state.currency;
    const [dep, setDep] = useState(5)

    const onChangeDep = (e) => {
        setDep(e.target.value)
    }

    return (
        <div className='crypto-container'>
            <div className='crypto-header'>Deposit: {currency}</div>
            <input type='number' onChange={onChangeDep}></input>
            <Link to={"/payment/result"} state={{currency: "TON", amount: dep}}>
                <GrayButton>Create Invoice</GrayButton>
            </Link>
        </div>
    )
}

export default CryptoPayment;