import React, { useState, useEffect, useContext } from "react";
import { Liked, HeartLogo } from "../HeartLogo";
import { AppContext } from "../../Context";

export const FavoriteButton = ({ id }) => {
    const {
        clicked,
        setClicked
    } = useContext(AppContext);
    // Favorite characters are saved in the localstorage
    var [favoriteList, setFavoriteList] = useState(JSON.parse(localStorage["favorite"]));


    useEffect(() => {
        setFavoriteList(JSON.parse(localStorage["favorite"]))
    }, [clicked])

    let addOrRemoveToFavoriteList = () => {

        if (isFavorite) {
            // Remove the item if it's liked
            favoriteList.splice(favoriteList.indexOf(id), 1);
            localStorage["favorite"] = JSON.stringify(favoriteList);
            setClicked(clicked + 1)
        } else {

            // Max of 5 items
            if (favoriteList.length < 5) {
                favoriteList.push(id);
                localStorage["favorite"] = JSON.stringify(favoriteList);
                setClicked(clicked + 1)
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