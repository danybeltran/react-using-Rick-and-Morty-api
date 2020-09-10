import React from "react";
import { FavoriteContainer } from "../components/Favorite/FavoriteContainer";
import { FavoriteCharactersHeader } from "../components/Favorite/FavoriteCharactersHeader";
import { FavoriteCharacters } from "../components/Favorite/FavoriteCharacters";

export const Favorite = () => {
    return (
        <FavoriteContainer>
            <FavoriteCharactersHeader text="Your favorite characters" />
            <br />
            <FavoriteCharacters />
        </FavoriteContainer>
    )
}