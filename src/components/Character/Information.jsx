import React from "react";
import { InformationTable } from "./InformationTable";
import { FavoriteButton } from "./FavoriteButton";

export const Information = (props) => {

    return (
        <div className="character-information">
            <InformationTable {...props} />
            <br />
            <FavoriteButton {...props} />
        </div>
    )
}