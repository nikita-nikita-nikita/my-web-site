import React, {useState} from 'react';
import './stylesModalWindow.scss';
import {Icon} from "semantic-ui-react";

interface Props {
    title: string,
    children: any
}

const ModalWindow: React.FC<Props> = ({title, children}) => {
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
                    {children}
                    <div className="popup-close">
                        <button className="popup-close-btn" onClick={onClose}>
                            <Icon name="close"/>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ModalWindow;
