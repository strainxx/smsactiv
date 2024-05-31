import React from 'react';
import "./graybtn.css"

// https://lzt.market/balance/transfer?username=ChotkiiYT&comment=sms-{userid}&amount=100
const GrayButton = ({children, onClick=()=>{}}) => {
    return <button className={"gray-btn"} onClick={onClick}>{children}</button>
}

export default GrayButton;