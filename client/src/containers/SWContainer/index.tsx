import React, {useEffect} from "react";
import "./stylesSWContainer.scss";
//@ts-ignore
import {connect} from "react-redux";
//@ts-ignore
import { Route, RouteComponentProps } from 'react-router-dom';
//@ts-ignore
import useInterval from 'react-useinterval';
// @ts-ignore
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
    planet:planet|undefined
    starship:starship|undefined
    person:person|undefined
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
        loadRandomObjects()
    }, [loadRandomObjects]);
    useInterval(()=>{
        loadRandomObjects()
    }, 5000);

    return (
        <main className="no-footer full-screen sw-color sw-main-page">
            <RandomObjectsContainer randomObjects={randomObjects}/>
            <SWSwitchPanel/>
            <Route exact path="/sw" component={SWHello}/>
            <Route path="/sw/persons" render={()=> <SWList object={person} list={list} deleteList={deleteList} loadList={loadPersonList}/>}/>
            <Route path="/sw/planets" render={()=> <SWList object={planet} list={list} deleteList={deleteList} loadList={loadPlanetList}/>}/>
            <Route path="/sw/starships" render={()=> <SWList object={starship} list={list} deleteList={deleteList} loadList={loadStarshipList}/>}/>
            <Route path="/sw/persons/:id" render={({match:{params:{id}}}:RouteComponentProps<TParams>)=>
                <SWPersonCard person={person} id={id} loadPerson={loadPerson}/>
            }/>
            <Route path="/sw/planets/:id" render={({match:{params:{id}}}:RouteComponentProps<TParams>)=>
                <SWPlanetCard planet={planet} id={id} loadPlanet={loadPlanet}/>
            }/>
            <Route path="/sw/starships/:id" render={({match:{params:{id}}}:RouteComponentProps<TParams>)=>
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
    }

export default connect(mapStateToProps, mapDispatchToProps)(SWContainer);
