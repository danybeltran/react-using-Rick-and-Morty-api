import React, { useState, useEffect, useContext } from "react";
import { Character } from "../components/Character";
import MortyFace from "../img/morty-no-favorites.png";
import { AppContext } from "../Context";

export const Favorite = () => {

    const {favoriteCharacters} = useContext(AppContext);

    return (
        <div className="favorite">
            <h3 className="characters-header">Your favorite characters</h3>
            <br />
            <div className="favorite-b">
                {
                    typeof favoriteCharacters.map !== "undefined" ?
                        favoriteCharacters.map((character) => <Character {...character} isFavorite={true} key={character.id} />)
                        :
                        <>
                            <div className="container-no-results">
                                <img src={MortyFace} className="no-results-image" alt="" />
                                <h3 className="no-results-text">List is empty</h3>
                            </div>
                        </>
                }
            </div>
        </div>
    )
}