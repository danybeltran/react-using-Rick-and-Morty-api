import React from "react";
import RickAndMortyTogether from "../img/rick-and-morty-together.png";
import { Link } from "react-router-dom";

export const Home = () => {
    return (
        <div>
            <div className="home">
                <div className="home-text-container">
                    <h2 className="home-header">
                        Welcome to the <span className="page-name">Rick&MortyPedia</span>
                    </h2>
                    <br />
                    <p className="home-paragraph">
                        Here you will find information about characters, episodes they appear on, status, etc.
                        <br />
                    </p>
                    <br />
                    <div className="flex">
                        <a href="https://github.com/danybeltran/react-using-Rick-and-Morty-api" rel="noopener noreferrer" target="_blank" className="github-link">
                            Github
                        </a>
                        <Link to="/characters/page/1" className="home-explore-button">
                            Explore
                        </Link>
                    </div>
                </div>
                <div className="home-image-container">
                    <img src={RickAndMortyTogether} alt="" />
                </div>
            </div>
        </div>
    )
}