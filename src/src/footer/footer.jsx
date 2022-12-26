import React from "react";
import "./footer.css";
import { PolicyBlock } from "./policyBlock";
import { Logo } from "../logo";
import { SocialMediaBlock } from "./socialMediaBlock";

export const Footer = () => {
    return (
        <div className="footer">
            <div className="footerContent">
                <div className="policyBlockPosition">
                    <PolicyBlock />
                </div>
                <div className="logo">
                    <Logo />
                </div>
                <div className="socialMediaBlock">
                    <SocialMediaBlock />
                </div>
            </div>
            <span className="rightsString">©2022 All rights reserved. Powered by SFXDX</span>
        </div>
    )
}