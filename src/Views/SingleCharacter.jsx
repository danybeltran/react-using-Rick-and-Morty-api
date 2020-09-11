import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";

export const SingleCharacter = () => {

    const [character, setCharacter] = useState({
        origin: {},
        location: {},
        episode: []
    });

    const { id } = useParams();

    useEffect(() => {
        const fetchCharacterInformation = async (characterId) => {
            var characterInfo = await fetch("https://rickandmortyapi.com/api/character/" + id);
            var data = await characterInfo.json();
            setCharacter(data);
            console.log(data)
        }
        fetchCharacterInformation(id)
    }, [id]);

    let CharacterStatus = character.status === "Alive" ? "text-green-600" :
        character.status === "Dead" ? "text-red-600" : "text-yellow-600";

    return (
        <div>
            <Helmet>
                <title>
                    {`${character.name} - Rick&MortyPedia`}
                </title>
                <meta property="og:description" content={"Basic information about " + character.name} />
                <meta property="og:image" content={character.image} />
            </Helmet>
            <div className="single-character p-12 md:flex text-gray-700">
                <div className="single-character-image md:w-1/2">
                    <img className="mx-auto md:ml-auto rounded-md shadow-md md:w-1/2 md:mr-3 h-100 object-fill" src={character.image} alt="" />
                </div>
                <br />
                <div className="single-character-information md:px-6">
                    <h4 className="single-character-name text-2xl text-center md:text-left">
                        {character.name}
                    </h4>
                    <p className="single-character-info-paragraph">
                        <span className="font-semibold">{character.species} - <span className={CharacterStatus}>{character.status}</span></span>
                    </p>
                    <p className="single-character-info-paragraph">
                        From: {character.origin.name}
                    </p>
                    <p className="single-character-info-paragraph">
                        Living in: {character.location.name}
                    </p>
                    <br />
                    <p className="single-character-info-paragraph">
                        <span className="text-sm">
                            To date, {character.name} appears in {character.episode.length} {character.episode.length === 1 ? "Episode" : "Episodes"}
                        </span>
                    </p>
                </div>
                <br />
            </div>
        </div>
    )
}