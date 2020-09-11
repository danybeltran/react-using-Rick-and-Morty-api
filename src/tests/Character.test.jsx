import React from "react";
import renderer from "react-test-renderer";
import { Character } from "../components/Character/";
import { BrowserRouter as Router } from "react-router-dom";


test("Should render Rick Sanchez character information", () => {
    const renderdComponent = renderer.create(
        <Router>

            <Character
                id={2}
                image="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
                name="Rick Sanchez"
                episode={["1", "2"]}
                status="Alive"
                species="Human"
                isFavorite={true}
            />
        </Router>
    );

    let component = renderdComponent.toJSON();

    expect(component).toMatchSnapshot();

    expect


})