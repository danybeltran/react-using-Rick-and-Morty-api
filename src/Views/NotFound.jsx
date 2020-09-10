
import React from "react";
import { Link } from "react-router-dom";

export const NotFound = () => {
    return (
        <div className="not-found">
            <h3 className="error-header">That's a 404 error</h3>
            <p className="error-paragraph">The page you requested doesn't exist.</p>
            <br />
            <Link to="/" className="error-home-link">Go home</Link>
        </div>
    )
}