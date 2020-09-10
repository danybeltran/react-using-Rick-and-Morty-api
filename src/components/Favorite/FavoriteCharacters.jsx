import React, { useContext } from "react";
import { AppContext } from "../../Context";
import { NoResults } from "./NoResults";
import { Character } from "../Character";

export const FavoriteCharacters = () => {

    const { favoriteCharacters } = useContext(AppContext);

    return (
        <div className="favorite-b">
            {
                typeof favoriteCharacters.map !== "undefined" ?
                    favoriteCharacters.map((character) => <Character {...character} isFavorite={true} key={character.id} />)
                    :
                    <>
                        <NoResults />
                    </>
            }
        </div>
    )
}