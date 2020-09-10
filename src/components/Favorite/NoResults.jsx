import React, { useContext } from "react";
import MortyFace from "../../img/morty-no-favorites.png";
import { AppContext } from "../../Context";

export const NoResults = () => {

    const { favoriteCharacters, fetchFavoriteDone } = useContext(AppContext);

    return favoriteCharacters.length === 0 && fetchFavoriteDone ? (
        <div className="favorite-b">
            <div className="container-no-results">
                <img src={MortyFace} className="no-results-image" alt="" />
                <h3 className="no-results-text">List is empty</h3>
            </div>
        </div>
    ) : ""

}