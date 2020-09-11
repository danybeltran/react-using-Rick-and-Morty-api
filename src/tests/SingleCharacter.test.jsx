import React from "react";
import { SingleCharacter } from "../Views/SingleCharacter";

import renderer from "react-test-renderer";
import { BrowserRouter as Router } from "react-router-dom";

test("Should render information about Rick Sanchez (id 1)", () => {
    const renderdComponent = renderer.create(
        <Router>
            <SingleCharacter testData={
                {
                    name: "Rick Sanchez",
                    image:"https://rickandmortyapi.com/api/character/avatar/1.jpeg",
                    status:"Alive",
                    species:"Human",
                    origin: {
                        name: "Earth"
                    },
                    location: {
                        name: "Earth (Replacement Dimension)"
                    },
                    episode: new Array(41)
                }
            } />
        </Router>
    );

    let component = renderdComponent.toJSON();

    expect(component).toMatchSnapshot();

})