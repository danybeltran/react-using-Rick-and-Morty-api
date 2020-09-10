import React, { useState } from "react";
import { InformationTable } from "./InformationTable";
import { FavoriteButton } from "./FavoriteButton";

export const Information = (props) => {
    const [favoriteList] = useState(JSON.parse(localStorage["favorite"]));

    let isFavorite = favoriteList.includes(character.id);
    
    return (
        <div className="character-information">
            <InformationTable {...props} />
            <br />
            <FavoriteButton {...{ id: props.id, isFavorite }} />
        </div>
    )
}