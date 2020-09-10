import React, { useContext } from "react";
import { AppContext } from "../../Context";

export const ZeroFound = () => {
    const {
        characters,
        userWillSearch
    } = useContext(AppContext);

    return (
        (characters.length === 0 && userWillSearch) ? (
            <div className="zero-found">
                <h2 className="text-center">No results :( </h2>
            </div>
        ) : ""
    )
}