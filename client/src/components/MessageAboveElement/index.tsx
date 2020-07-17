import React from "react";
import "./stylesMessageAboveElement.scss";
type Props = {
    content:string
    style?:string
}

const messageAboveElement:React.FC<Props> =({content, style = "small"}) => {
    return (
        <div className={style} >
            {content}
        </div>
    )
}
