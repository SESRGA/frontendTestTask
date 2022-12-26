import React from "react";
import { DisconnectButton } from "./disconnectButton";
import { MetamaskLogo } from "./metamaskLogo";
import './walletButton.css'

export const AccountLabel = ({accountName}) => {
    console.log(accountName)
    const customAccountName = accountName.length > 14 
        ? accountName.substr(0, 9) + '...' + accountName.substr(accountName.length - 4)
        : accountName;
    return (
        <div className="accountLabel">
            <MetamaskLogo />
            <span className="accountName">{customAccountName}</span>
            <DisconnectButton />
        </div>
    )
}