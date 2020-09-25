import React, {useState} from "react";
import { NavLink } from 'react-router-dom';
import {Icon} from "semantic-ui-react";
import {Profile} from "../../containers/AuthProfileContainer/reducer";
import "./styleHeader.scss";
import {getImageAvatar} from "../../helpers/imgHelper";
type Props = {
    user:Profile
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
                                        <li className="header-text" onClick={toggleContextMenu}><NavLink className="header-text" to="/my-web-site/profile">Profile</NavLink></li>
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
            <div className="auth-profile-block header-just-on-big-display">
                {
                    Object.keys(user).length!==0
                        ?
                        <NavLink className="header-text" to="/my-web-site/profile">
                            <img className="avatar-icon" src={getImageAvatar(user.imageUrl)} alt="avatar"/>
                        </NavLink>
                        :
                        <>
                            <NavLink className="header-text" to="/my-web-site/login">Login </NavLink>
                            <NavLink className="header-text" to="/my-web-site/register"> Register</NavLink>
                        </>
                }
            </div>
        </header>
    )
};

export default Header;
