import React, {useRef, useState} from "react";
import "./stylesLinkCard.scss";
import {Icon, Input, StrictIconProps} from "semantic-ui-react";

interface Props extends StrictIconProps{
    avatar?: string
    linkToProfile: string
    nickname: string
    name:StrictIconProps|any
    linkToCopy?:string
}
const LinkCard: React.FC<Props> = ({avatar, linkToProfile, name, nickname}) => {
    const [copied, setCopied] = useState(false);
    const [hovered, setHovered] = useState(false);
    let input: any = useRef();
    const copyToClipboard = (e: any) => {
        input.select();
        document.execCommand('copy');
        e.target.focus();
        setCopied(true);
    };
    const shouldShowElement = ({target}:any) => {
        const isNotTooltip:boolean = !(
            target.classList.contains("arrow")||
            target.classList.contains("tooltip")||
            target.classList.contains("tooltip-text")
        );
        if(isNotTooltip) setHovered(true);
    }
    return (
        <div className="link-card">
            <div className="account-info">
                <a href={linkToProfile} target="_blank" rel="noopener noreferrer">
                    {
                        avatar
                            ?(
                                <>
                                    <img className="avatar-link" src={avatar} alt="Avatar"/>
                                </>
                            )
                            : <img className="avatar-link" src="https://forwardsummit.ca/wp-content/uploads/2019/01/avatar-default.png" alt="Avatar"/>
                    }
                    <p className="nickname">{nickname}</p>
                </a>
            </div>
            <div className="content-below">
                <p className="icon-link">
                    <Icon name={name}/>
                </p>
                <div className="input-container">
                    <Input
                        fluid
                        value={nickname}
                        ref={ref => {
                            input = ref;
                        }}
                    />
                </div>
                <button
                    className="copy-link-button"
                    onClick={copyToClipboard}
                    onMouseOver={shouldShowElement}
                    onMouseOut={()=> {
                        setHovered(false);
                        setTimeout(()=>setCopied(false), 300);
                    }}
                    aria-describedby={`tooltip-${name}`}
                    >
                    Copy<Icon name="copy"/>
                    <div
                        className="tooltip"
                        role="tooltip"
                        aria-hidden={!hovered}
                        style={{opacity:(hovered?1:0)}}
                        id={`tooltip-${name}`}>
                        <div className="tooltip-text">{copied?'Copied':'Copy to clipboard'}</div>
                        <div className="arrow"/>
                    </div>
                </button>
            </div>
        </div>
    )
};

export default LinkCard;
