import React from "react";

export const InformationTable = ({ name, species, episode, status }) => {

    let CharacterStatus = status === "Alive" ? "text-green-600" :
        status === "Dead" ? "text-red-600" : "text-yellow-600";

    return (
        <div className="informationTable">
            <p className="character-name">{name}</p>
            <p>Species: {species}</p>
            <p>Episodes: {episode.length}</p>
            <p>Status:<span className={CharacterStatus}> {status}</span></p>
        </div>
    )
}