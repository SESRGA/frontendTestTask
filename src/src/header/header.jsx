import React from "react";
import { Logo } from "../logo";
import { WalletButton } from "../walletButton/walletButton";
import "./header.css"

export const Header = () => {

    return (
        <div className="header">
            <div >
                <Logo />
            </div>
            <div className="wallet">
                <WalletButton />
            </div>
        </div>
    )
}