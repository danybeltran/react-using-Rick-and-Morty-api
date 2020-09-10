import React, { useState, useEffect, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { Character } from "../components/Character";
import { AppContext } from "../Context";
import { SearchButton } from "../components/CharactersView/SearchButton";
import { SearchInput } from "../components/CharactersView/SearchInput";
import { Pagination } from "../components/CharactersView/Pagination";
import { MappedCharacters } from "../components/CharactersView/MappedCharacters";

export const Characters = () => {

    const context = useContext(AppContext);

    const {
        characters,
        setPage,
        setSearchQuery,
        userWillSearch,
        setUserWillSearch
    } = useContext(AppContext);

    const { page } = useParams();

    useEffect(() => {
        setPage(page);
    }, [page])

    return (
        <div className="characters">
            <h3 className="characters-header">All characters</h3>
            <br />
            <div className="characters-body">
                <Pagination />
            </div>
            <div className="characters-result">
                <MappedCharacters />
                {
                    // If the search gave no results
                    (characters.length === 0 && userWillSearch) && (
                        <div className="zero-found">
                            <h2 className="text-center">No results</h2>
                        </div>
                    )
                }
            </div>
        </div>
    )
}