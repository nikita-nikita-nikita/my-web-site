import React from "react";
import "./stylesSWRandomObject.scss";
import CharacterCard from "../../CharacterCard";

type props = {
    img:string
    children?: any|undefined
    isFullScreen?:boolean
}

const RandomObject:React.FC<props> = ({img, children, isFullScreen}) => {
    return <CharacterCard imgLink={img} isRandomObject={!isFullScreen} isStarWars fullScreenCardClass={isFullScreen}>{children}</CharacterCard>
}


export default RandomObject;
