import React, {useState} from "react";
// @ts-ignore
import { NavLink } from 'react-router-dom';
import {Icon} from "semantic-ui-react";
import "./styleHeader.scss";

const Header: React.FC = () => {
    const [showContextMenu, setShowContextMenu] = useState(false);
    const toggleContextMenu = () => setShowContextMenu(contextMenu => {
            return !contextMenu;
        }
    );
    return (
        <header className="header no-footer">
            <nav className="nav-header">
                <div className="burger-menu header-just-on-small-display">
                    <div className="burger-menu">
                        <button
                            className="burger-menu-btn header-text"
                            onClick={toggleContextMenu}>
                                <Icon name="bars"/>
                        </button>
                        {
                            showContextMenu ?
                                (
                                    <ul>
                                        <li className="header-text" onClick={toggleContextMenu}><NavLink className="header-text" to="/my-web-site/"><Icon name="home"/></NavLink></li>
                                        <li className="header-text" onClick={toggleContextMenu}><NavLink className="header-text" to="/my-web-site/games">Games</NavLink></li>
                                        <li className="header-text" onClick={toggleContextMenu}><NavLink className="header-text" to="/my-web-site/links">Links</NavLink></li>
                                        <li className="header-text" onClick={toggleContextMenu}><NavLink className="header-text" to="/my-web-site/about">About</NavLink></li>
                                        <li className="header-text" onClick={toggleContextMenu}><NavLink className="header-text" to="/my-web-site/sw">Star Wars</NavLink></li>
                                    </ul>
                                )
                                : null
                        }

                    </div>
                </div>
                <div className="logo-container header-just-on-big-display">
                    <h2 className="logo header-text">
                        <NavLink className="header-text" to="/my-web-site/"><Icon name="home"/></NavLink>
                    </h2>
                </div>
                <div className="header-just-on-big-display">
                    <ul className="header-nav-list">
                        <li className="header-text"><NavLink className="header-text" to="/my-web-site/games">Games</NavLink></li>
                        <li className="header-text"><NavLink className="header-text" to="/my-web-site/links">Links</NavLink></li>
                        <li className="header-text"><NavLink className="header-text" to="/my-web-site/about">About</NavLink></li>
                        <li className="header-text"><NavLink className="header-text" to="/my-web-site/sw">Star Wars</NavLink></li>
                    </ul>
                </div>
            </nav>
        </header>
    )
};

export default Header;
