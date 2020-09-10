import React, { useState } from "react";
import { Liked, HeartLogo } from "../HeartLogo";

export const FavoriteButton = ({ id }) => {

    // Favorite characters are saved in the localstorage
    var [favoriteList] = useState(JSON.parse(localStorage["favorite"]));

    let addOrRemoveToFavoriteList = () => {

        if (isFavorite) {
            // Remove the item if it's liked
            favoriteList.splice(favoriteList.indexOf(id), 1);
            localStorage["favorite"] = JSON.stringify(favoriteList);
            window.location.reload()
        } else {

            // Max of 5 items
            if (favoriteList.length < 5) {
                favoriteList.push(id);
                localStorage["favorite"] = JSON.stringify(favoriteList);
                window.location.reload()
            } else {
                alert("You can only ad up to 5 characters to the 'Favorite' list");
            }
        }

    }

    let isFavorite = favoriteList.includes(id)
    return (
        <button className="favorite-button" onClick={addOrRemoveToFavoriteList} title={(isFavorite ? "Remove from" : "Add to") + " favorite"}>
            {/* {// Render a white heart if not favorite and filled if it is} */}
            {isFavorite ? <Liked /> : <HeartLogo />}
        </button>
    )
}