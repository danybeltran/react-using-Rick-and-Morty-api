import "jest-fix-undefined"
import React from "react";
import renderer from "react-test-renderer";
import { NotFound } from "../Views/NotFound";
import { BrowserRouter as Router } from "react-router-dom";


test("Should render a 404 error screen", () => {
    const renderdComponent = renderer.create(
        <Router>
            <NotFound />
        </Router>
    );

    let component = renderdComponent.toJSON();

    expect(component).toMatchSnapshot();

    expect


})