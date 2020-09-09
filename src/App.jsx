import React, { useEffect } from 'react';
import { Switch, Route } from "react-router-dom";
import { Navigation } from './components/Navigation';
import { Home } from './Views/Home';

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
            </Switch>
        </div>
    );
}

export default App;