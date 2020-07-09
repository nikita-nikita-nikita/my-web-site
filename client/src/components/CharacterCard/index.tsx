import React from "react";
import "./stylesCharacterCard.scss";

export type stats = {
    name: string,
    age: number,
    gender: string,
    eyeColor: string
}
interface Props {
    imgLink:string,
    children: Array<any>,
    fullScreenCardClass?:boolean
}
const CharacterCard: React.FC<Props> = ({imgLink, children, fullScreenCardClass})=> {
    return(
        <div className={`character-card ${fullScreenCardClass ? 'full-screen' : ''}`}>
            <img src={imgLink} className="character-img" alt="avatar"/>
            <ul className="stats">
                {children}
            </ul>
        </div>
    )
}

export default CharacterCard;
