import React from "react";
import MortyFace from "../../img/morty-no-favorites.png";

export const NoResults = () => {
    return (
        <div className="container-no-results">
            <img src={MortyFace} className="no-results-image" alt="" />
            <h3 className="no-results-text">List is empty</h3>
        </div>
    )

}