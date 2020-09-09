import React, { useState, useEffect } from "react";
import { Character } from "../components/Character";
import MortyFace from "../img/morty-no-favorites.png";

export const Favorite = () => {
    // get the string of all ids separated by comma to fetch the api
    const [AllFavoriteCharactersId] = useState(localStorage["favorite"].replace(/\[|\]/g, ""));

    const [favoriteCharacters, setFavoriteCharacters] = useState([]);


    useEffect(() => {
        const getFavoriteCharacters = async (ids) => {
            var favorite = await fetch("https://rickandmortyapi.com/api/character/" + ids + ",");
            favorite = await favorite.json();
            setFavoriteCharacters(favorite);
        }
        getFavoriteCharacters(AllFavoriteCharactersId);
    },[AllFavoriteCharactersId])
    return (
        <div className="favorite">
            <h3 className="characters-header">Your favorite characters</h3>
            <br />
            <div className="favorite-b">
                {
                    typeof favoriteCharacters.map !== "undefined" ?
                        favoriteCharacters.map((character) => <Character props={character} isFavorite={true} key={character.id} />)
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