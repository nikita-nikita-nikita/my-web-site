import React from "react";
import {Route, Switch} from 'react-router-dom';
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
import ProfileContainer from "../ProfileContainer";

const Routing: React.FC = () => {
    return (
        <>
            <Header user={undefined}/>
            <Switch>
                <Route path="/" exact component={RedirectToHome}/>
                <Route path="/my-web-site" exact component={MainPage}/>
                <Route path="/my-web-site/links" component={LinksPage}/>
                <Route path="/my-web-site/about" component={AboutPage}/>
                <Route path="/my-web-site/games" component={GamesPage}/>
                <Route path="/my-web-site/sw/" component={StarWarsPage}/>
                <Route path="/my-web-site/profile" component={ProfileContainer}/>
                <Route path="/my-web-site/login" component={LoginPage}/>
                <Route path="/my-web-site/register" component={RegisterPage}/>
                <Route path="*" exact component={NotFound}/>
            </Switch>
            <Footer/>
        </>
    )
}
export default Routing;
