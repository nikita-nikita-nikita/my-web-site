import React from "react";
import "./stylesCharacterCard.scss";

interface Props {
    imgLink:string
    children?: any
    fullScreenCardClass?:boolean
    isRandomObject?:boolean
    isVertical?:boolean
    isInsideContainer?:boolean
    isStarWars?:boolean
}

// to highlight name add class "name"

const CharacterCard: React.FC<Props> = ({imgLink, children, fullScreenCardClass, isRandomObject, isStarWars, isVertical, isInsideContainer})=> {
    return(
        <div className=
                 {
                     `character-card`+
                     `${fullScreenCardClass ? ' full-screen-character-card' : ''}` +
                     `${isRandomObject ? ' random-object' : ''}` +
                     `${isVertical ? ' vertical' : ''}` +
                     `${isInsideContainer?' inside-container': ''}` +
                     `${isStarWars? ' sw-card-color': ''}`
                 }>
            <img src={imgLink} className="character-img" alt="avatar"/>
            <ul className="stats">
                {children}
            </ul>
        </div>
    )
}

export default CharacterCard;
