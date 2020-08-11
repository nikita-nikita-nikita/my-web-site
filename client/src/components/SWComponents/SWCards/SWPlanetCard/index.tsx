import React from "react";
import SWCharacter from "../../SWCharacter";
import {planet} from "../../../../containers/SWContainer/reducer";
type Props = {
    planet?: planet|undefined
    loadPlanet: Function
    id: string
}
const SWPlanetCard: React.FC<Props> = ({planet, loadPlanet, id}) => (
    <SWCharacter loadFunction={loadPlanet} id={id} object={planet}>
        <li className="name">{planet?.name}</li>
        <li>Diameter: {planet?.diameter}</li>
        <li>Population: {planet?.population}</li>
        <li>Rotation period: {planet?.rotationPeriod}</li>
    </SWCharacter>
);

export default SWPlanetCard;
