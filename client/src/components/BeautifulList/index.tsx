import React from "react";

type Props = {
    title:string,
    children:any
}

const BeautifulList:React.FC<Props> = ({title, children}) => (
    <label className="about-label">
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
