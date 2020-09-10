import React, { useContext } from "react";
import { AppContext } from "../../Context";

export const SearchInput = () => {

    const {
        searchQuery,
        updateSearchQuery
    } = useContext(AppContext);
    
    return (
        <input
            type="text"
            value={searchQuery}
            onChange={updateSearchQuery}
            className="search-input"
            placeholder="e.g. Rick Sanchez"
        />
    )
}