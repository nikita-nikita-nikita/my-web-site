import React from "react";
import { Icon } from "semantic-ui-react";
import "./stylesFooter.scss"

const Footer:React.FC = () => {
    return(
        <footer className="footer">
            <nav className="nav-footer">
                <div className="link">
                    <a href="https://github.com/nikita-nikita-nikita" ><Icon name="github" />GitHub</a>
                </div>
                <div className="link">
                    <a href="https://ru.reactjs.org/"><Icon name="react" />React</a>
                </div>
                <div className="link">
                    <a href="https://nodejs.org/uk/"><Icon name="node js" />Node js</a>
                </div>
            </nav>
            <div className="footer-text">
                Some useful text in footer
            </div>
        </footer>
    );
};

export default Footer;
