import React, {useEffect, useState} from "react";
import LinkCard from "../../components/LinkCard";
import Spinner from "../../components/Spinner";
import "./stylesLinks.scss";
import { bindActionCreators } from 'redux';
// @ts-ignore
import {connect} from "react-redux";
import {loadLinks, deleteLinks} from "./actions";
import {initialStateLinksType} from "./reducer";

interface Props {
    links:initialStateLinksType,
    loadLinks():Promise<{}>
    deleteLinks():void
}

const Links:React.FC<Props> = ({links, loadLinks, deleteLinks}) => {
    const [isLoading, setLoading] = useState(true);
    useEffect(() => {
        loadLinks().then(()=>setLoading(false));
        return () => {
            deleteLinks()
        }
    }, []);
    if(isLoading) return <Spinner/>;
    return (
        <div className="links">
            {links.map(data=>
                <LinkCard {...data}/>)}
        </div>
    )
};

const mapStateToProps = (rootState:any)=>({
    links:rootState.links
});

const actions:any = {
    loadLinks,
    deleteLinks
}

const mapDispatchToProps = (dispatch:any) => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Links);
