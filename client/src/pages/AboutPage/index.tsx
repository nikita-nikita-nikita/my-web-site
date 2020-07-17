import React from "react";
import "./stylesAbout.scss";
import CharacterCard from "../../components/CharacterCard";
import {stats} from "../../components/CharacterCard";
import img from "../../images/me.jpg";
import BeautifulList from "../../components/BeautifulList";
const me:stats = {
    name: 'Nikita',
    age: 17,
    gender: 'male',
    eyeColor: 'blue'
}

const AboutPage = () => (
    <main className="about-page no-footer">
        <h1 className="content-before-footer">About me</h1>
        <CharacterCard imgLink={img} fullScreenCardClass>
            <li className="name">{me.name}</li>
            <li>Age: {me.age}</li>
            <li>Gender: {me.gender}</li>
            <li>Eye color: {me.eyeColor}</li>
        </CharacterCard>
        <div className="about-content">
            <h2>A little bit more about me</h2>
            <div className="about-text">
                <BeautifulList title="Education">
                    <li>2005-2008 Kindergarten</li>
                    <li>2008-2015 School № 96</li>
                    <li>2015-2019 Lyceum № 142</li>
                    <li>2015-Nowadays Igor Sikorsky Kyiv Polytechnic Institute</li>
                </BeautifulList>
                <BeautifulList title="Hobby">
                    <li>Programming</li>
                    <li>Football</li>
                    <li>Volleyball</li>
                    <li>Math</li>
                </BeautifulList>
                <BeautifulList title="Character">
                    <li>Purposeful</li>
                    <li>Team player</li>
                    <li>I like to improve myself and cats</li>
                </BeautifulList>
            </div>
        </div>
    </main>

);

export default AboutPage;
