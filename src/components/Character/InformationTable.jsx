import React from "react";
import { Link } from "react-router-dom";

export const InformationTable = ({ id, name, species, episode, status }) => {

    let CharacterStatus = status === "Alive" ? "text-green-600" :
        status === "Dead" ? "text-red-600" : "text-yellow-600";

    return (
        <div className="informationTable">
            <Link to={"/character/" + id} className="character-name">{name}</Link>
            <p>Species: {species}</p>
            <p>Episodes: {episode.length}</p>
            <p>Status:<span className={CharacterStatus}> {status}</span></p>
        </div>
    )
}