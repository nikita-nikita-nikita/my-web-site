import React from "react";
// @ts-ignore
import {Route, Switch} from 'react-router-dom';
import NotFound from "../../pages/NotFound";
import MainPage from "../../pages/MainPage";
import LinksPage from "../../pages/LinksPage";
import AboutPage from "../../pages/AboutPage";
import GamesPage from "../../pages/GamePage";
import StarWarsPage from "../../pages/StarWarsPage";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import RedirectToHome from "../../components/RedirectToHome";

const Routing: React.FC = () => {
    return (
        <>
            <Header/>
            <Switch>
                <Route path="/" exact component={RedirectToHome}/>
                <Route path="/my-web-site" exact component={MainPage}/>
                <Route path="/my-web-site/links" component={LinksPage}/>
                <Route path="/my-web-site/about" component={AboutPage}/>
                <Route path="/my-web-site/games" component={GamesPage}/>
                <Route path="/my-web-site/sw/" component={StarWarsPage}/>
                <Route path="*" exact component={NotFound}/>
            </Switch>
            <Footer/>
        </>
    )
}
export default Routing;
