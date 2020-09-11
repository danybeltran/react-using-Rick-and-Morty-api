import React from "react";
import renderer from "react-test-renderer";
import { Character } from "../components/Character/";


test("Should render Rick Sanchez character information", () => {
    const renderdComponent = renderer.create(
        <Character
            id={2}
            image="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
            name="Rick Sanchez"
            episode={["1", "2"]}
            status="Alive"
            species="Human"
            isFavorite={true}
        />
    );

    let component = renderdComponent.toJSON();

    expect(component).toMatchSnapshot();

    expect


})