import React, { useState } from "react";
import "./walletButton.css";
import "@fontsource/manrope";
import { AccountLabel } from "./accountLabel";

export const WalletButton = () => {
    const [accountName, setAccountName] = useState('');
    const connectWallet = async () => {
        const { ethereum } = window;
        if(!ethereum) {
            alert("Кошелек не найден")
            return;
        }
        await ethereum.request({method:'eth_requestAccounts'})
        .then(res=>{
                setAccountName(res[0])
        })
    }
    return (
        <>
            {
                accountName 
                ? <AccountLabel accountName={accountName}/>
                : <button 
                    className="walletButton"
                    onClick={() => connectWallet()}
                >Connect Wallet</button>
            }
        </>
    )
}