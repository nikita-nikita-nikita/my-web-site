import React from "react";
import "./stylesBeautifulList.scss"

type Props = {
    title:string
    children:any
    style?: React.CSSProperties
}

const BeautifulList:React.FC<Props> = ({title, children, style}) => (
    <label className="beautiful-label" style={style}>
        <input type="checkbox" className="about-checkbox"/>
        <div className="checkbox-content">
            <strong className="about-paragraph">{title}</strong><div className="triangle"/>
            <ul>
                {children}
            </ul>
        </div>
    </label>
);

export default BeautifulList;
