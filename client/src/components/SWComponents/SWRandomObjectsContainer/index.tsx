import React, {useState} from "react";
import "./stylesSWRandomObjectsContainer.scss";
import RandomObject from "../SWRandomObject";
import {allObjectsType} from "../../../containers/SWContainer/reducer";
import Spinner from 'react-bootstrap/Spinner';

type Props = {
    randomObjects: allObjectsType
}

const RandomObjectsContainer: React.FC<Props> = ({randomObjects: {person, planet, starship} = {}}) => {
        const [isShown, setIsShown] = useState(false);
        return (
            <div className="sw-full-screen-width">
                {person && planet && starship
                    ? (
                        <>
                            <div className="sw-random-objects-big-container min-width-1000">
                                <RandomObject img={person.img}>
                                    <li className="name">{person.name}</li>
                                    <li>Height: {person.height}</li>
                                    <li>Gender: {person.gender}</li>
                                    <li>Eye color: {person.eyeColor}</li>
                                </RandomObject>
                                <RandomObject img={planet.img}>
                                    <li className="name">{planet.name}</li>
                                    <li>Diameter: {planet.diameter}</li>
                                    <li>Population: {planet.population}</li>
                                    <li>Rotation period: {planet.rotationPeriod}</li>
                                </RandomObject>
                                <RandomObject img={starship.img}>
                                    <li className="name">{starship.name}</li>
                                    <li>Model: {starship.model}</li>
                                    <li>Starship class: {starship.starshipClass}</li>
                                    <li>Cost in credits: {starship.costInCredits}</li>
                                </RandomObject>
                            </div>
                            <div onClick={() => setIsShown(!isShown)} className="sw-random-objects-small-container max-width-1000">
                                <button>{!isShown ? "Show random characters" : "Hide random characters"}</button>
                                {isShown ? <div className="sw-random-objects-small">
                                    <RandomObject img={person.img} isFullScreen>
                                        <li className="name">{person.name}</li>
                                        <li>Height: {person.height}</li>
                                        <li>Gender: {person.gender}</li>
                                        <li>Eye color: {person.eyeColor}</li>
                                    </RandomObject>
                                    <RandomObject img={planet.img} isFullScreen>
                                        <li className="name">{planet.name}</li>
                                        <li>Diameter: {planet.diameter}</li>
                                        <li>Population: {planet.population}</li>
                                        <li>Rotation period: {planet.rotationPeriod}</li>
                                    </RandomObject>
                                    <RandomObject img={starship.img} isFullScreen>
                                        <li className="name">{starship.name}</li>
                                        <li>Model: {starship.model}</li>
                                        <li>Starship class: {starship.starshipClass}</li>
                                        <li>Cost in credits: {starship.costInCredits}</li>
                                    </RandomObject>
                                </div>
                                : null}
                            </div>
                        </>)
                    : <Spinner animation="grow" as="div"/>
                }
            </div>
        )
    }
;

export default RandomObjectsContainer;
