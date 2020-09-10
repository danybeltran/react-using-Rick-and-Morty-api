<<<<<<< HEAD
import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Character } from "../components/Character";

export const Characters = () => {

    const [characters, setCharacters] = useState([]);

    const [favoriteList, setFavoriteList] = useState([]);


    // for searching characters

    const [userWillSearch, setUserWillSearch] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");

    // set some default values for previous and next pages
    const [pages, setPages] = useState({
        prev: "",
        next: ""
    });

    // the correponding `page` param for the api
    const { page } = useParams();


    useEffect(() => {
        // Update the list of favorite characters with the ones in the localstorage
        setFavoriteList(JSON.parse(localStorage["favorite"]))
    }, [characters]);

    useEffect(() => {
        const getCharacters = async (_page) => {

            // This will be executed first
            if (!userWillSearch) {
                const allInformation = await fetch("https://rickandmortyapi.com/api/character?page=" + page);

                const information = await allInformation.json();

                // get previous and next page and set them
                var { prev, next } = information.info;


                // just get the next page number to use in Prev - Next buttons spliting at the `=`

                setPages({
                    prev: String(prev).split("=")[1],
                    next: String(next).split("=")[1]
                });
                // get array of characters and set them
                const { results } = information;

                setCharacters(results)
            }

            // Will run when the user clicks the `Search` button
            else {
                const allInformation = await fetch("https://rickandmortyapi.com/api/character?name=" + searchQuery);

                const information = await allInformation.json();

                // get array of characters and set them
                const { results } = information;

                // Set an empty array if failed
                setCharacters(!results ? [] : results)
            }
        }
        getCharacters();
    }, [page, searchQuery, userWillSearch]);

    let updateQuery = (e) => setSearchQuery(e.target.value);

    return (
        <div className="characters">
            <h3 className="characters-header">All characters</h3>
            {
                // Because in the first page there's no previous page
            }
            <br />
            <div className="characters-body">

                <button onClick={() => setUserWillSearch(!userWillSearch)} className="search-button">Search</button>

                {
                    userWillSearch ?
                        <>
                            <input type="text" value={searchQuery} onChange={updateQuery} className="search-input" placeholder="e.g. Rick Sanchez" />
                        </>
                        :
                        <>
                            <Link to={"/characters/page/" + pages.prev ? pages.prev : "1"} className="pagination-button">Prev.</Link>
                            <span>Page {page} of 34</span>
                            <Link to={"/characters/page/" + pages.next ? pages.next : "34"} className="pagination-button">Next</Link>
                        </>
                }
            </div>
            <div className="characters-result">
                {
                    // Show more characters if the user is searching something
                    characters.map((character, characterIndex) => characterIndex < (userWillSearch ? 672 : 10) && <Character props={character} isFavorite={favoriteList.includes(character.id)} key={character.id} />)
                }
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
=======
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
                <MappedCharacters/>
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
>>>>>>> 32ef5e00d4735d6783d785b48d2330430e388d02
}