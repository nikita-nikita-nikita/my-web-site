import React, {useEffect} from "react";
import "./stylesSWCharacter.scss";

import CharacterCard from "../../CharacterCard";
import {person, planet, starship} from "../../../containers/SWContainer/reducer";
import Spinner from "react-bootstrap/cjs/Spinner";

type Props = {
    children: any
    object: planet | starship | person | undefined
    id: string
    loadFunction: Function
}

const SWCharacter: React.FC<Props> = ({children, object, id, loadFunction}) => {
    useEffect(() => {
        loadFunction(id);
    }, [loadFunction, id]);
    return object ?
        (
            <div className="sw-container-character">
                <CharacterCard imgLink={object.img} isVertical fullScreenCardClass isInsideContainer isStarWars>
                    {children}
                </CharacterCard>
            </div>
        )
        : (<div className="sw-container-character"><Spinner animation="grow"/></div>);
}

export default SWCharacter;
