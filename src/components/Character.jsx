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
}