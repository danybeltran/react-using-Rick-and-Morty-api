import React from "react";
import {
    FavoriteContainer,
    FavoriteCharactersHeader,
    FavoriteCharacters,
    NoResults
} from "../components/Favorite/";

export const Favorite = () => {
    return (
        <FavoriteContainer>
            <FavoriteCharactersHeader text="Your favorite characters" />
            <br />
            <FavoriteCharacters />
            <NoResults />
        </FavoriteContainer>
    )
}