import React, { useEffect, useState } from 'react';
import { Switch, Route } from "react-router-dom";
import { Navigation } from './components/Navigation';
import { Home } from './Views/Home';
import { Characters } from './Views/Characters';
import { Favorite } from './Views/Favorite';
import { NotFound } from './Views/NotFound';
import { AppContext } from './Context';
import particle from "./particle.js";

import Particles from "react-particles-js"
import { SingleCharacter } from './Views/SingleCharacter';

function App() {
    const [characters, setCharacters] = useState([]);
    const [favoriteCharacters, setFavoriteCharacters] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [clicked, setClicked] = useState(0);
    const [fetchFavoriteDone, setFetchFavoriteDone] = useState(false);
    const [darkTheme, setDarkTheme] = useState(Boolean(localStorage["theme"]));
    const [changedTheme, setChangedTheme] = useState(0);

    const [pages, setPages] = useState({
        prev: "",
        next: ""
    });
    const [page, setPage] = useState("1");
    const [userWillSearch, setUserWillSearch] = useState(false);

    useEffect(() => {
        function setLocalStorageItemIfUndefined() {
            if (typeof localStorage["favorite"] === "undefined") {
                localStorage["favorite"] = "[]"
            }
        }
        setLocalStorageItemIfUndefined();
    }, []);

    // Set favorite characters

    useEffect(() => {
        var charactersIds = localStorage["favorite"].replace(/\[|\]/g, ",") // e.g. 1,4,6,2
        const getFavoriteCharacters = async (ids) => {
            var favorite = await fetch("https://rickandmortyapi.com/api/character/" + ids + ",");
            favorite = await favorite.json();
            setFavoriteCharacters(favorite);
            setFetchFavoriteDone(true);
        }
        getFavoriteCharacters(charactersIds);
    }, [clicked, setClicked]);

    // for searching characters

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


    let updateSearchQuery = (e) => setSearchQuery(e.target.value);

    let changeTheme = () => {
        if (darkTheme) {
            localStorage.removeItem("theme");
        } else {
            localStorage["theme"] = true;
        }
        setChangedTheme(changedTheme + 1)
    };

    useEffect(() => {
        setDarkTheme(Boolean(localStorage["theme"]));
    }, [changedTheme])

    return (
        <AppContext.Provider value={{
            favoriteCharacters,
            searchQuery,
            setSearchQuery,
            characters,
            pages,
            setPages,
            page,
            setPage,
            updateSearchQuery,
            userWillSearch,
            setUserWillSearch,
            fetchFavoriteDone,
            clicked,
            setClicked,
            darkTheme,
            changeTheme
        }}>
            <AppContext.Consumer>
                {(value) => {
                    return (
                        <div className={value.darkTheme ? "dark" : ""}>
                            <Particles className="prtc" params={JSON.parse(particle)} />
                            <Navigation />
                            <Switch>
                                <Route exact path="/" component={Home} />
                                <Route exact path="/characters/page/:page" component={Characters} />
                                <Route exact path="/character/:id" component={SingleCharacter} />
                                <Route exact path="/favorite" component={Favorite} />
                                <Route exact path="*" component={NotFound} />
                            </Switch>
                        </div>
                    )
                }}
            </AppContext.Consumer>
        </AppContext.Provider>
    );
}

export default App;