import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../../Context";

export const PaginationLink = ({ type }) => {

    const { pages } = useContext(AppContext);

    return (
        <Link
            to={
                "/characters/page/" + (pages[type] ? pages[type] : (type === "prev" ? "1" : "34"))
            }

            className="pagination-button"
        >
            {
                type==="prev" ? "Prev." : "Next"
            }
        </Link>
    )
}