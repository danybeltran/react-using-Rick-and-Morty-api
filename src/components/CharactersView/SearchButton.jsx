import React, { useContext } from "react";
import { AppContext } from "../../Context";

export const SearchButton = ({ text }) => {

    const { userWillSearch, setUserWillSearch } = useContext(AppContext);

    return <button onClick={() => setUserWillSearch(!userWillSearch)} className="search-button">{text}</button>
}