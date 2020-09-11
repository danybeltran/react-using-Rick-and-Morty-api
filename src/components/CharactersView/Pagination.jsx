import React, { useContext } from "react";
import { AppContext } from "../../Context";
import { SearchButton } from "./SearchButton";
import { SearchInput } from "./SearchInput";
import { PaginationLink } from "./PaginationLink";
import { useParams, Redirect } from "react-router-dom";

export const Pagination = () => {

    const { userWillSearch } = useContext(AppContext);

    const { page } = useParams();

    return page * 1 < 1 || page * 1 > 34 ? <Redirect to="/characters/page/1" /> : (
        <div className="pagination">
            <SearchButton text="Search" />
            {
                userWillSearch ?
                    <SearchInput />
                    :
                    <>
                        <PaginationLink type="prev" />
                        <span>Page {page} of 34</span>
                        <PaginationLink type="next" />
                    </>
            }
        </div>
    )
}