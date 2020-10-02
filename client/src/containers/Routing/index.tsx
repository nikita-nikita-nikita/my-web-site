import React, {useEffect} from "react";
import {Route, Switch} from 'react-router-dom';
import {connect} from "react-redux";
import {getCurrentUser} from "../AuthProfileContainer/actions";
import {MapStateToPropsType} from "../../store";
import PrivateRoute from "./priviteRoute";
import PublicRoute from "./publicRoute";
import NotFound from "../../pages/NotFound";
import MainPage from "../../pages/MainPage";
import LinksPage from "../../pages/LinksPage";
import AboutPage from "../../pages/AboutPage";
import GamesPage from "../../pages/GamePage";
import StarWarsPage from "../../pages/StarWarsPage";
import LoginPage from "../../pages/loginPage";
import RegisterPage from "../../pages/RegisterPage";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import RedirectToHome from "../../components/RedirectToHome";
import ProfilePage from "../../pages/ProfilePage";
import {Profile} from "../AuthProfileContainer/reducer";
import Notifications from "../Notifications";

type Props = {
    user:Profile
    getCurrentUser:Function
}

const Routing: React.FC<Props> = ({user, getCurrentUser}) => {
    useEffect(()=>{
        getCurrentUser();
    }, [getCurrentUser]);
    return (
        <>
            <Header user={user}/>
            <Switch>
                <Route path="/" exact component={RedirectToHome}/>
                <Route path="/my-web-site" exact component={MainPage}/>
                <Route path="/my-web-site/links" component={LinksPage}/>
                <Route path="/my-web-site/about" component={AboutPage}/>
                <Route path="/my-web-site/games" component={GamesPage}/>
                <Route path="/my-web-site/sw/" component={StarWarsPage}/>
                <PrivateRoute path="/my-web-site/profile" component={ProfilePage}/>
                <PublicRoute path="/my-web-site/login" component={LoginPage}/>
                <PublicRoute path="/my-web-site/register" component={RegisterPage}/>
                <Route path="*" exact component={NotFound}/>
            </Switch>
            <Footer/>
            <Notifications/>
        </>
    )
}

type StateFromReduxType = {user:Profile};

const mapStateToProps:MapStateToPropsType<StateFromReduxType> = (state) => ({user:state.profile});

const mapDispatchToProps = {
    getCurrentUser
}

export default connect(mapStateToProps, mapDispatchToProps)(Routing);
