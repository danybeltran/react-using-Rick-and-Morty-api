import React from "react";

export const CharacterImage = ({ id, image, name }) => {
    return <img className="character-image" src={image} alt={name + " picture"} />
}