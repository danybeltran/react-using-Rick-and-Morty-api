import "jest-fix-undefined"
import React from "react";
import renderer from "react-test-renderer";
import { Home } from "../Views/Home"
import { BrowserRouter as Router } from "react-router-dom";


test("Should render the Home screen", () => {
    const renderdComponent = renderer.create(
        <Router>
            <Home />
        </Router>
    );

    let component = renderdComponent.toJSON();

    expect(component).toMatchSnapshot();

    expect


})