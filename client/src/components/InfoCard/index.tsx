import React from "react";
import "./stylesInfoCard.scss"

type Props = {
    link: string,
    title: string
}

const InfoCard:React.FC<Props> = ({link, title}) => {
    return (
        <div className="info-card-container">
            <img src={link} className="img" alt={title} />
            <h2 className="title">{title}</h2>
        </div>
    )
}

export default InfoCard;
