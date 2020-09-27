import React, {useEffect} from "react";
import "./stylesSWContainer.scss";
import {connect} from "react-redux";
import { Route, RouteComponentProps } from 'react-router-dom';
//@ts-ignore
import useInterval from 'react-useinterval';
import SWSwitchPanel from "../../components/SWComponents/SWSwitchPanel";
import RandomObjectsContainer from "../../components/SWComponents/SWRandomObjectsContainer";
import {rootStateType} from "../../store";
import {loadRandomObjects, loadList, deleteList, loadPerson, loadPlanet, loadStarship} from "./actions";
import {allObjectsType, swList, planet, starship, person} from "./reducer";
import SWHello from "../../components/SWComponents/SWHello";
import SWList from "../../components/SWComponents/SWList";
import SWPlanetCard from "../../components/SWComponents/SWCards/SWPlanetCard";
import SWPersonCard from "../../components/SWComponents/SWCards/SWPersonCard";
import SWStarshipCard from "../../components/SWComponents/SWCards/SWStarshipCard";

type Props = {
    loadRandomObjects: Function
    loadPersonList: Function
    loadStarshipList: Function
    loadPlanetList: Function
    randomObjects: allObjectsType
    list: swList
    router: any
    deleteList: Function
    planet:planet
    starship:starship
    person:person
    loadPerson: Function
    loadPlanet: Function
    loadStarship: Function
}

type TParams = {
    id: string
}

const SWContainer:React.FC<Props> = (
    {
        loadRandomObjects,
        randomObjects,
        loadStarshipList,
        loadPlanetList,
        loadPersonList,
        list,
        deleteList,
        loadPlanet,
        loadStarship,
        loadPerson,
        planet,
        person,
        starship}) => {

    useEffect(()=>{
        loadRandomObjects();
    }, [loadRandomObjects]);

    useInterval(()=>loadRandomObjects(), 5000);

    return (
        <main className="no-footer full-screen sw-color sw-main-page">
            <RandomObjectsContainer randomObjects={randomObjects}/>
            <SWSwitchPanel/>
            <Route exact path="/my-web-site/sw" component={SWHello}/>
            <Route path="/my-web-site/sw/persons" render={()=> <SWList object={person} list={list} deleteList={deleteList} loadList={loadPersonList}/>}/>
            <Route path="/my-web-site/sw/planets" render={()=> <SWList object={planet} list={list} deleteList={deleteList} loadList={loadPlanetList}/>}/>
            <Route path="/my-web-site/sw/starships" render={()=> <SWList object={starship} list={list} deleteList={deleteList} loadList={loadStarshipList}/>}/>
            <Route path="/my-web-site/sw/persons/:id" render={({match:{params:{id}}}:RouteComponentProps<TParams>)=>
                <SWPersonCard person={person} id={id} loadPerson={loadPerson}/>
            }/>
            <Route path="/my-web-site/sw/planets/:id" render={({match:{params:{id}}}:RouteComponentProps<TParams>)=>
                <SWPlanetCard planet={planet} id={id} loadPlanet={loadPlanet}/>
            }/>
            <Route path="/my-web-site/sw/starships/:id" render={({match:{params:{id}}}:RouteComponentProps<TParams>)=>
                <SWStarshipCard starship={starship} id={id} loadStarship={loadStarship}/>
            }/>
        </main>
    );
}

const mapStateToProps = ({starWars: {randomObjects, list, object}}:rootStateType) => (
    {
        randomObjects,
        list,
        planet: object?.planet,
        starship: object?.starship,
        person: object?.person

    }
);

const mapDispatchToProps =
    {
        loadRandomObjects,
        loadPersonList: loadList("people"),
        loadStarshipList: loadList("starships"),
        loadPlanetList: loadList("planets"),
        deleteList,
        loadPerson,
        loadPlanet,
        loadStarship
    };

// @ts-ignore
export default connect(mapStateToProps, mapDispatchToProps)(SWContainer);
