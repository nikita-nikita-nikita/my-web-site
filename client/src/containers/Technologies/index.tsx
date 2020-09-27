import React, {useState, MouseEvent, useEffect} from "react";
import {connect} from "react-redux";
import InfoCard from "../../components/InfoCard";
import "./stylesTechnologies.scss";
import {card} from "./reducer";
import {rootStateType} from "../../store";
import {loadTechnologies, deleteTechnologies} from "./actions";
import Spinner from 'react-bootstrap/Spinner';

interface actionOnPC {
    onClick(event: MouseEvent<HTMLDivElement>|any):void
}
interface actionOnMobile {
    onMouseOver():void
    onMouseOut():void
}
const toggle = (toggleCards:Function):(actionOnMobile|actionOnPC)  => (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))
    ?{
        onMouseOver() {
            toggleCards(true);
        },
        onMouseOut() {
            toggleCards(false);
        },
    }
    :{
        onClick(event) {
            if(event.target.classList.contains('info-cards')||event.target.classList.contains('technologies-title'))
            toggleCards((isToggled:boolean)=>!isToggled)
        }
    }
type Props = {
    links: Array<card>
    loadTechnologies: Function
    deleteTechnologies: Function
}
const Technologies: React.FC<Props> = ({links= [], loadTechnologies, deleteTechnologies}) => {
    const [isToggled, toggleCards] = useState(false);
    useEffect(()=> {
        loadTechnologies();
        return () => deleteTechnologies();
    }, [loadTechnologies, deleteTechnologies]);
    return links.length ? (
        <div className="technologies-section">
            <div>
                <div className={`info-cards${isToggled?" toggled":""}`} {...toggle(toggleCards)}>
                    <h1 className="technologies-title">Technologies</h1>
                    {links?.map(({link, title}, index) =>
                        (<InfoCard
                            key={index}
                            link={link}
                            title={title}/>)
                    )}
                </div>
            </div>
        </div>
    ) : <div><Spinner animation="grow" as="div"/></div>;
};

const mapStateToProps = (rootState: rootStateType) => ({
    links: rootState.technologies
});

const mapDispatchToProps = {
    loadTechnologies,
    deleteTechnologies
};

export default connect(mapStateToProps, mapDispatchToProps)(Technologies);
