import React from "react";
import { CharacterImage, FavoriteButton, InformationTable } from "./Character/index";

export const Character = (props, { isFavorite, test }) => {
    return (
        <>
            <div className="character">
                <div className="character-body">
                    <CharacterImage {...props} />
                    <div className="character-information">
                        <InformationTable {...props} />
                        <br />
                        <FavoriteButton {...{ id: props.id, isFavorite: test ? true : isFavorite }} />
                    </div>
                </div>
            </div>
        </>
    )
}