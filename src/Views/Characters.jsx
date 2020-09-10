import React, { useState, useEffect, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { Character } from "../components/Character";
import { AppContext } from "../Context";

export const Characters = () => {

    const context = useContext(AppContext);

    const {
        characters,
        pages,
        setPage,
        searchQuery,
        setSearchQuery,
        userWillSearch,
        setUserWillSearch
    } = useContext(AppContext);

    const { page } = useParams();

    useEffect(() => {
        setPage(page);
    }, [page])

    let setSearchTrue = () => setUserWillSearch(!userWillSearch);

    let updateQuery = (e) => setSearchQuery(e.target.value);

    return (
        <div className="characters">
            <h3 className="characters-header">All characters</h3>
            <br />
            <div className="characters-body">
                <div className="pagination">

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
            </div>
            <div className="characters-result">
                {characters.map((character) => <Character {...character} userWillSearch />)}
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