import React from "react";
import {Route, Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {Profile} from "../../AuthProfileContainer/reducer";
import {RouteComponentProps} from "react-router";
import {MapStateToPropsType} from "../../../store";

type Props = {
    user:Profile|{}
    path:string
    component:React.ComponentType<RouteComponentProps<any>> | React.ComponentType<any>
}

const PublicRoute:React.FunctionComponent<Props> = ({component, path, user}) =>
    Object.keys(user).length===0
        ? <Route path={path} component={component}/>
        : <Redirect to="/my-web-site/"/>

const mapStateToProps:MapStateToPropsType<{user:Profile}> = state => ({
    user:state.profile
});

export default connect(mapStateToProps)(PublicRoute);
