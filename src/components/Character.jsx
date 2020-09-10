<<<<<<< HEAD
import React, { useState } from "react";
import { HeartLogo, Liked } from "./HeartLogo";

export const Character = ({ props, isFavorite }) => {

    // Favorite characters are saved in the localstorage
    var [favoriteList] = useState(JSON.parse(localStorage["favorite"]));
    var [favorite] = useState(isFavorite)


    let addOrRemoveToFavoriteList = () => {
        if (favorite) {

            // Remove the item if it's liked
            favoriteList.splice(favoriteList.indexOf(props.id), 1);
            localStorage["favorite"] = JSON.stringify(favoriteList);
            window.location.reload()
        } else {

            // Max of 5 items

            if (favoriteList.length < 5) {
                favoriteList.push(props.id);
                localStorage["favorite"] = JSON.stringify(favoriteList);
                window.location.reload()
            } else {
                alert("You can only ad up to 5 characters to the 'Favorite' list");
            }
        }

    }

    const { status } = props;

    let CharacterStatus = status === "Alive" ? "text-green-600" :
        status === "Dead" ? "text-red-600" : "text-yellow-600";
    return (
        <>
            <div className="character">
                <div className="character-body">
                    <img className="character-image" src={props.image} alt={props.name + " picture"} />
                    <div className="character-information">
                        <p className="character-name">{props.name}</p>
                        <p>Species: {props.species}</p>
                        <p>Episodes: {props.episode.length}</p>
                        <p>Status:<span className={CharacterStatus}> {status}</span></p>
                        <br />

                        {/* {// Render a white heart if not favorite and filled if it is} */}
                        <button className="favorite-button" onClick={addOrRemoveToFavoriteList} title={(favorite ? "Remove from" : "Add to") + " favorite"}>
                            {favorite ? <Liked /> : <HeartLogo />}
                        </button>

                    </div>
                </div>
            </div>
        </>
    )
=======
import React from "react";
import { CharacterImage } from "./Character/CharacterImage"
import { FavoriteButton } from "./Character/FavoriteButton";
import { InformationTable } from "./Character/InformationTable";

export const Character = (props, { isFavorite, userWillSearch }) => {

    const { status } = props;

    let CharacterStatus = status === "Alive" ? "text-green-600" :
        status === "Dead" ? "text-red-600" : "text-yellow-600";

    return (
        <>
            <div className="character">
                <div className="character-body">
                    <CharacterImage {...props} />
                    <div className="character-information">
                        <InformationTable {...props} />
                        <br />
                        <FavoriteButton {...{ id: props.id, isFavorite }} />
                    </div>
                </div>
            </div>
        </>
    )
>>>>>>> 32ef5e00d4735d6783d785b48d2330430e388d02
}