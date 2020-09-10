import React, { useState, useEffect, useContext } from "react";
import { Liked, HeartLogo } from "../HeartLogo";
import { AppContext } from "../../Context";

export const FavoriteButton = ({ id }) => {

    if (typeof localStorage["favorite"] == "undefined") {
        localStorage["favorite"] = "[]"
    }

    const context = useContext(AppContext);

    var clicked, setClicked;

    if (typeof context === "undefined") {
        clicked = 0;
        setClicked = function (newValue) {
            clicked++
        }
    }
    else {
        clicked = context.clicked;
        setClicked = context.setClicked;
    }
    // Favorite characters are saved in the localstorage
    var [favoriteList, setFavoriteList] = useState(JSON.parse(localStorage["favorite"]));


    useEffect(() => {
        setFavoriteList(JSON.parse(localStorage["favorite"]));
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
        <button className="favorite-button flex" onClick={addOrRemoveToFavoriteList} title={(isFavorite ? "Remove from" : "Add to") + " favorite"}>
            {/* {// Render a white heart if not favorite and filled if it is} */}
            {isFavorite ?
                <>
                    <Liked />
                    <span className="pl-3 text-sm md:text-lg">
                        Remove
                </span>
                </> :
                <>
                    <HeartLogo />
                    <span className="pl-3 text-sm md:text-lg">
                        Favorite
                </span>
                </>}
        </button>
    )
}