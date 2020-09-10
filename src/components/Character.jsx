import React from "react";
import { CharacterImage, FavoriteButton, InformationTable } from "./Character/";

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