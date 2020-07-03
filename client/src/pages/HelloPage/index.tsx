import React from "react";
import ModalWindow from "../../components/ModalWindow";

const body: string =
`I glad to see you here, wanderer.
Don't know why you here, but it's good especially for me.
This site was made by using react and typescript`


const HelloMessageComponent = () => <ModalWindow title="Welcome to my website" body={body} />

export default HelloMessageComponent;
