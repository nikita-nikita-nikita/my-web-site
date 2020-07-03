import React, {useState} from 'react';
import './stylesModalWindow.scss';
import {Button} from "semantic-ui-react";

interface Props {
    title: string,
    body: string
}

const ModalWindow: React.FC<Props> = ({title, body}) => {
    const [show, setShow] = useState(true)
    const onClose = ({ target }: any) => {
        const { className } = target;
        if(className==='popup-body'||className.includes('popup-close-btn')||className.includes('close icon')) setShow(false);
    }

    return (
        <div className={(show) ? 'popup open' : 'popup close'}>
            <div className="popup-body" onClick={onClose}>
                <div className="popup-content">
                    <h2 className="popup-title">{title}</h2>
                    <p className="body">
                        {body}
                    </p>
                    <div className="popup-close">
                        <Button icon="close" className="popup-close-btn" onClick={onClose}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ModalWindow;
