import React from "react";
import SWCharacter from "../../SWCharacter";
import {person} from "../../../../containers/SWContainer/reducer";

type Props = {
    person?: person | undefined
    loadPerson: Function
    id: string
}

const SWPersonCard: React.FC<Props> = ({person, loadPerson, id}) => (
    <SWCharacter loadFunction={loadPerson} id={id} object={person}>
        <li className="name">{person?.name}</li>
        <li>Height: {person?.height}</li>
        <li>Gender: {person?.gender}</li>
        <li>Eye color: {person?.eyeColor}</li>
    </SWCharacter>
);

export default SWPersonCard;
