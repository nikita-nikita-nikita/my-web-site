import React from "react";
import Technologies from "../../containers/Technologies";
import HelloMessageComponent from "../HelloPage";

const MainPage: React.FC = () => (
    <div className="no-footer">
        <Technologies />
        <HelloMessageComponent />
    </div>

);

export default MainPage;
