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

const PrivateRoute:React.FunctionComponent<Props> = ({component, path, user}) =>
    Object.keys(user).length===0
        ? <Redirect to="/my-web-site/login"/>
        : <Route path={path} component={component}/>

const mapStateToProps:MapStateToPropsType<{user:Profile}> = state => ({
    user:state.profile
});

export default connect(mapStateToProps)(PrivateRoute);
