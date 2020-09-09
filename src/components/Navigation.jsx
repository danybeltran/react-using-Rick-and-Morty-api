import React from "react";
import Logo from "../img/logo.png"
import CouncilLogo from "../img/council-logo.png";
import { HeartLogo } from "./HeartLogo";
import { Link } from "react-router-dom";


export const Navigation = () => {
    return (
        <div className="navigation">
            <Link to="/" className="image-container" title="Home">
                <img className="main-logo" src={Logo} alt="Main logo" />
                <img className="small-logo" src={CouncilLogo} alt="Small logo" />
            </Link>
            <Link to="/characters/page/1" className="navigation-link" title="Characters">
                Characters
            </Link>
            <Link to="/favorite" className="navigation-favorite-link" title="Favorite">
                <HeartLogo />
            </Link>
        </div>
    )
}