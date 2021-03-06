import React from "react";
import {Link} from "react-router-dom";
import "./stylesSWSwitchPanel.scss";

const SWSwitchPanel: React.FC = () => (
    <nav className="sw-control-panel">
        <div className="sw-link sw-characters-link">
            <Link to="/my-web-site/sw/persons/">
                <p className="sw-link-text">Characters</p>
            </Link>
        </div>
        <div className="sw-link sw-planets-link">
            <Link to="/my-web-site/sw/planets/">
                <p className="sw-link-text">Planets</p>
            </Link>
        </div>
        <div className="sw-link sw-starships-link">
            <Link to="/my-web-site/sw/starships/">
                <p className="sw-link-text">Starships</p>
            </Link>
        </div>
    </nav>
);

export default SWSwitchPanel;
