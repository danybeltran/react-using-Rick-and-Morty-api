import React, { useContext } from "react";
import MortyFace from "../../img/morty-no-favorites.svg";
import MortyFaceDarkTheme from "../../img/morty-no-favorites-dark.svg";
import { AppContext } from "../../Context";

export const NoResults = () => {

    const { favoriteCharacters, fetchFavoriteDone, darkTheme } = useContext(AppContext);

    return favoriteCharacters.length === 0 && fetchFavoriteDone ? (
        <div className="favorite-b">
            <div className="container-no-results">
                <img src={darkTheme ? MortyFaceDarkTheme : MortyFace} className="no-results-image" alt="" />
                <h3 className="no-results-text">List is empty</h3>
            </div>
        </div>
    ) : ""

}