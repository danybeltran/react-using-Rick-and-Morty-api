import React, { useEffect } from 'react';
import { Switch, Route } from "react-router-dom";
import { Navigation } from './components/Navigation';
import { Home } from './Views/Home';
import { Characters } from './Views/Characters';
import { Favorite } from './Views/Favorite';
import { NotFound } from './Views/NotFound';

function App() {
    useEffect(() => {
        function setLocalStorageItemIfUndefined() {
            if (typeof localStorage["favorite"] === "undefined") {
                localStorage["favorite"] = "[]"
            }
        }
        setLocalStorageItemIfUndefined();
    }, []);
    return (
        <div>
            <Navigation />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/characters/page/:page" component={Characters} />
                <Route exact path="/favorite" component={Favorite} />
                <Route exact path="*" component={NotFound} />
            </Switch>
        </div>
    );
}

export default App;