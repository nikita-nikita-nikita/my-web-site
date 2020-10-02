import React, {useEffect} from "react";
import {NotificationManager, NotificationContainer} from "react-notifications";
import {connect} from "react-redux";
import {Notification} from "./reducer";
import {MapStateToPropsType} from "../../store";

type Props = {
    notification:Notification
}

const Notifications:React.FunctionComponent<Props> = ({notification}) =>
{
    useEffect(() => {
        if(notification) NotificationManager[notification.type](notification.message);
    },[notification])
    return <NotificationContainer/>
};


type StateFromReduxType = {
    notification: Notification
};

const mapDispatchToProps:MapStateToPropsType<StateFromReduxType> = state =>
    (
        {
            notification: state.notification
        }
    );

export default connect(mapDispatchToProps)(Notifications);
