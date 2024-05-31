import React from 'react';
import "./button.css"

// https://lzt.market/balance/transfer?username=ChotkiiYT&comment=sms-{userid}&amount=100
const DefaultButton = ({children, onClick=()=>{}}) => {
    return <button className={"btn"} onClick={onClick}>{children}</button>
}

export default DefaultButton;