import React, {useState, MouseEvent} from "react";
// @ts-ignore
import {connect} from "react-redux";
import InfoCard from "../../components/InfoCard";
import "./stylesTechnologies.scss";
import {initialStateTechnologiesType} from "./reducer";
import {rootStateType} from "../../store";
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
const Technologies: React.FC<initialStateTechnologiesType> = ({links}) => {
    const [isToggled, toggleCards] = useState(false);
    return (
        <div className="technologies-section">
            <div>
                <div className={`info-cards${isToggled?" toggled":""}`} {...toggle(toggleCards)}>
                    <h1 className="technologies-title">Technologies</h1>
                    {links.map(({link, title}, index) =>
                        (<InfoCard
                            key={index}
                            link={link}
                            title={title}/>)
                    )}
                </div>
            </div>
        </div>
    )
};

const mapStateToProps = (rootState: rootStateType) => ({
    links: rootState.technologies.links
});

export default connect(mapStateToProps, null)(Technologies);
