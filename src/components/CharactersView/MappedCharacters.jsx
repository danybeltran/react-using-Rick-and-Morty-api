import React, { useContext } from "react";
import { AppContext } from "../../Context";
import { Character } from "../Character";

export const MappedCharacters = () => {
    const { characters, userWillSearch } = useContext(AppContext);

    return characters.map((character, characterIndex) => {

        // No character limit when user is searching

        return characterIndex < (userWillSearch ? 671 : 10) && <Character {...character} key={character.id} />
    })
}