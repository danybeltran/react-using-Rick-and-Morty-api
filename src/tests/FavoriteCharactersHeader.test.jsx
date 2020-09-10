import React from "react";
import { FavoriteCharactersHeader} from "../components/Favorite/FavoriteCharactersHeader";

import renderer from "react-test-renderer";

test("Component should render 'Rick Sanchez' text", () => {
    const renderdComponent = renderer.create(
        <FavoriteCharactersHeader text="Rick Sanchez"/>
    );

    let component = renderdComponent.toJSON();

    expect(component).toMatchSnapshot();

})