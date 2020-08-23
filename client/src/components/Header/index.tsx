import React, {useState} from "react";
import { NavLink } from 'react-router-dom';
import {Icon} from "semantic-ui-react";
import {Profile} from "../../containers/ProfileContainer/reducer";
import "./styleHeader.scss";
type Props = {
    user:Profile|undefined
}

const Header: React.FC<Props> = ({user}) => {
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
            <div className="auth-profile-block">
                {
                    user
                        ? <NavLink className="header-text" to="/my-web-site/profile"><img className="avatar-icon" src="https://i0.wp.com/crowd-literature.eu/wp-content/uploads/2015/01/no-avatar.gif?fit=150%2C150&ssl=1" alt="avatar"/></NavLink>
                        :
                        <>
                            <NavLink className="header-text" to="/my-web-site/login">Login </NavLink> <NavLink className="header-text" to="/my-web-site/register"> Register</NavLink>
                        </>
                }
            </div>
        </header>
    )
};

export default Header;
