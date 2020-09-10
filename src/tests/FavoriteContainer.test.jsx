import React from "react";
import { FavoriteContainer } from "../components/Favorite/";

import renderer from "react-test-renderer";

test("Should render a 'h1' with text 'A test' and a 'p' with text 'Paragraph'", () => {
    const renderdComponent = renderer.create(
        <FavoriteContainer><h1>A test</h1><p>Paragraph</p></FavoriteContainer>
    );

    let component = renderdComponent.toJSON();

    expect(component).toMatchSnapshot();

    expect


})