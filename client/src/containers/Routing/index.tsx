import React from "react";
// @ts-ignore
import { Route, Switch } from 'react-router-dom';
import NotFound from "../../pages/NotFound";
import MainPage from "../../pages/MainPage";
import LinksPage from "../../pages/LinksPage";
import AboutPage from "../../pages/AboutPage";
import GamesPage from "../../pages/GamePage";
import StarWarsPage from "../../pages/StarWarsPage";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const Routing: React.FC = () => {
    return (
        <>
            <Header />
            <Switch>
                <Route path="/" exact component={MainPage}/>
                <Route path="/links"  component={LinksPage}/>
                <Route path="/about"  component={AboutPage}/>
                <Route path="/games"  component={GamesPage}/>
                <Route path="/sw/"  component={StarWarsPage}/>
                <Route path="*" exact component={NotFound} />
            </Switch>
            <Footer />
        </>
    )
}

export default Routing;
