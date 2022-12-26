import React from "react";
import { Instagram } from "../socialMediaLogos/instagram";
import { Fb } from "../socialMediaLogos/fb";
import { Twitter } from "../socialMediaLogos/twitter";
import { Youtube } from "../socialMediaLogos/youtube";

export const SocialMediaBlock = () => {
    return (
        <div className="socialMediaBlock">
            <div className="socialMediaLogo">
                <Fb />
            </div>
            <div className="socialMediaLogo">
                <Twitter />
            </div>
            <div className="socialMediaLogo">
                <Youtube />
            </div>
            <div className="socialMediaLogo">
                <Instagram />
            </div>
        </div>
    )
}