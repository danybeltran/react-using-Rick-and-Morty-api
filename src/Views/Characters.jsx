import React, { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../Context";
import {
    Pagination,
    MappedCharacters,
    ZeroFound,
    Results,
    CharactersHeader,
    CharactersBody,
    CharactersContainer
} from "../components/CharactersView";

export const Characters = () => {

    const {
        setPage
    } = useContext(AppContext);

    const { page } = useParams();

    useEffect(() => {
        setPage(page);
    }, [page, setPage])

    return (
        <CharactersContainer>
            <CharactersHeader text="All characters" />
            <br />
            <CharactersBody>
                <Pagination />
            </CharactersBody>
            <Results>
                <MappedCharacters />
                <ZeroFound />
            </Results>
        </CharactersContainer>
    )
}