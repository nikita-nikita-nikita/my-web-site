import React from "react";
import "./stylesSWHello.scss";

const SWHello:React.FC = () => {
    return (
        <div className="sw-hello-h1-container">
            <h1 className="sw-hello-h1">Welcome to star wars word, jedi, choose the category</h1>
            <p>Arrow will help you</p>
        </div>
    );
}

export default SWHello
