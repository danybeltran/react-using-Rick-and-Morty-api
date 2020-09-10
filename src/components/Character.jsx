import React from "react";
import { CharacterImage } from "./Character/CharacterImage"
import { FavoriteButton } from "./Character/FavoriteButton";
import { InformationTable } from "./Character/InformationTable";

export const Character = (props, { isFavorite }) => {

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