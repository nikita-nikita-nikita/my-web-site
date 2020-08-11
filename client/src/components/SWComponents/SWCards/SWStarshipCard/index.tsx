import React from "react";
import SWCharacter from "../../SWCharacter";
import {starship} from "../../../../containers/SWContainer/reducer";

type Props = {
    starship?: starship|undefined
    loadStarship: Function
    id: string
}
const SWStarshipCard: React.FC<Props> = ({starship, id, loadStarship}) => (
    <SWCharacter loadFunction={loadStarship} id={id} object={starship}>
        <li className="name">{starship?.name}</li>
        <li>Model: {starship?.model}</li>
        <li>Starship class: {starship?.starshipClass}</li>
        <li>Cost in credits: {starship?.costInCredits}</li>
    </SWCharacter>
);

export default SWStarshipCard;
