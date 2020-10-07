import React from "react";
import {Link} from "react-router-dom";
import ModalWindow from "../../components/ModalWindow";

const body =
    <>
        I glad to see you here, wanderer.
        Don't know why you here, but it's good especially for me.
        This site was made by using react and typescript<br/>
        If you will find some bugs, <Link to="/my-web-site/links"><p style={{color:"black", display:"inline-block"}}>please contact me</p></Link>
    </>


const HelloMessageComponent = () =>
    <ModalWindow title="Welcome to my website">
    {body}
    </ModalWindow>

export default HelloMessageComponent;
