import React, { useEffect, useState } from 'react';
import { Switch, Route } from "react-router-dom";
import { Navigation } from './components/Navigation';
import { Home } from './Views/Home';
import { Characters } from './Views/Characters';
import { Favorite } from './Views/Favorite';
import { NotFound } from './Views/NotFound';
import { AppContext } from './Context';

function App() {
    const [favoriteCharacters, setFavoriteCharacters] = useState([]);

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
        var charactersIds = localStorage["favorite"].replace(/\[|\]/g, "") // e.g. 1,4,6,2
        const getFavoriteCharacters = async (ids) => {
            var favorite = await fetch("https://rickandmortyapi.com/api/character/" + ids + ",");
            favorite = await favorite.json();
            setFavoriteCharacters(favorite);
        }
        getFavoriteCharacters(charactersIds);
    }, [favoriteCharacters])

    return (
        <AppContext.Provider value={{
            favoriteCharacters
        }}>
            <div>
                <Navigation />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/characters/page/:page" component={Characters} />
                    <Route exact path="/favorite" component={Favorite} />
                    <Route exact path="*" component={NotFound} />
                </Switch>
            </div>
        </AppContext.Provider>
    );
}

export default App;