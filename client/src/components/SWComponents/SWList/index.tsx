import React, {useEffect} from "react";
import {Link, useHistory} from "react-router-dom";
import "./stylesSWList.scss";
import {swList, planet, starship, person} from "../../../containers/SWContainer/reducer";
import Spinner from "react-bootstrap/cjs/Spinner";
type Props = {
    list?: swList
    deleteList: Function
    loadList: Function
    object: planet|starship|person|undefined
}

const SWList:React.FC<Props> = ({list, deleteList, loadList, object}) => {
    const history = useHistory();
    useEffect(() => {
        loadList();
        if(object) history.push(object.id);
        return ()=>{deleteList()}
    }, [deleteList, loadList, history, object]);
    return(
        list ?
            <ul className="sw-list">
                {list.map(item=>(
                    <Link to={item.id.toString()}>
                        <li key={item.id.toString()}>
                            {item.name}
                        </li>
                    </Link>
                    )
                )}
            </ul>
            :(<div className="sw-list"><Spinner animation="grow"/></div>)
    )
}

export default SWList;
