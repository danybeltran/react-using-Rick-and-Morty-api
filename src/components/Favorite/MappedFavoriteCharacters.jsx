import React, { useContext } from "react";
import { AppContext } from "../../Context";
import { Character } from "../Character";

export const MappedFavoriteCharacters = () => {
    const { favoriteCharacters } = useContext(AppContext);
    return favoriteCharacters.map((character) => <Character {...character} />)
}