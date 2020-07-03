import React from "react";
// @ts-ignore
import {connect} from "react-redux";
import InfoCard from "../../components/InfoCard";
import "./stylesTechnologies.scss";
import {initialStateTechnologiesType} from "./reducer";
import {rootStateType} from "../../store";

const Technologies: React.FC<initialStateTechnologiesType> = ({links}) => (
    <div>
        <h1 className="technologies-title">Technologies</h1>
        <div className="info-cards">
            {links.map(({link, title}, index) =>
                (<InfoCard
                    key={index}
                    link={link}
                    title={title}/>)
            )}
        </div>
    </div>
);

const mapStateToProps = (rootState: rootStateType) => ({
    links: rootState.technologies.links
});

export default connect(mapStateToProps, null)(Technologies);
