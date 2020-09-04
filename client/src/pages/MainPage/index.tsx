import React from "react";
import Technologies from "../../containers/Technologies";
import HelloMessageComponent from "../HelloPage";

const MainPage: React.FC = () => (
    <main className="no-footer">
        <Technologies />
        <HelloMessageComponent />
    </main>

);

export default MainPage;
