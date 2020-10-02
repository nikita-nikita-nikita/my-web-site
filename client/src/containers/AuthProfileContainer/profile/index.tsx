import React, {useState, ChangeEvent} from "react";
import {Profile} from "../reducer";
import {connect} from "react-redux";
import {MapStateToPropsType} from "../../../store";
import {getImageAvatar} from "../../../helpers/imgHelper";
import {change, signOut, del, saveChangedImage} from "../actions";
import validator from "validator";
import "../stylesProfileAuth.scss";
import {Form, Icon} from "semantic-ui-react";
import ifNotUndefined from "../../../helpers/ifNotUndefined";
import {useImageServiceContext} from "../../imageService";
import {setError, setInfo} from "../../Notifications/actions";


type Props = {
    user: Profile,
    change: Function,
    signOut: Function,
    del: Function,
    saveChangedImage: (img:string) => Promise<any>,
    setError:Function,
    setInfo:Function
}


const ProfileContainer: React.FunctionComponent<Props> = (
    {
        user,
        change: changeUser,
        signOut: signOutUser,
        del: deleteUser,
        saveChangedImage: saveImage,
        setError,
        setInfo
    }) => {
    //state
    // data
    const [phoneNumber, setPhoneNumber] =
        useState<string>(user.phoneNumber ? user.phoneNumber : "+380");
    const [username, setUsername] =
        useState<string>(user.username ? user.username : "");
    const [email, setEmail] =
        useState<string>(user.email ? user.email : "");
    const [newPassword, setNewPassword] =
        useState<string>("");
    const [currentPassword, setCurrentPassword] =
        useState<string>("");
    const [newImage, setNewImage] =
        useState<string>(ifNotUndefined(user.imageUrl, ""));
    //loading
    const [isLoading, setLoading] =
        useState<boolean>(false);
    // errors
    const [phoneNumberError, setPhoneNumberError] =
        useState<boolean>(false);
    const [emailError, setEmailError] =
        useState<boolean>(false);
    const [newPasswordError, setNewPasswordError] =
        useState<boolean>(false);
    // display
    const [changeProfile, setChangeProfile] =
        useState<boolean>(false);
    const [changePassword, setChangePassword] =
        useState<boolean>(false);
    const [isImageChanged, setIsImageChanged] =
        useState<boolean>(false);
    //data from context
    const imageService = useImageServiceContext();
    //deleteChanges
    const deleteChanges = () => {
        setPhoneNumber(user.phoneNumber ? user.phoneNumber : "+380");
        setUsername(user.username ? user.username : "");
        setEmail("");
        setNewPassword("");
    }
    //deleteLocalErrors
    const deleteErrors = () => {
        setPhoneNumberError(false);
        setEmailError(false);
        setNewPasswordError(false);
    }
    //beforeRequestToServer setLoading(true) deleteRequestError
    const beforeRequestToServer = () => {
        setLoading(true);
    }

    // submit
    const submit = async () => {
        setLoading(true);
        if(emailError || (newPasswordError&&newPasswordError) || (phoneNumberError&&phoneNumber)) return setError("some field invalid");
        deleteErrors();
        try {
            await changeUser({
                uuid: user.uuid,
                email,
                username,
                newPassword,
                phoneNumber,
                currentPassword
            });
            setInfo("Successfully changed");
        } catch (error) {
            setError(error.response.data.message);
        } finally {
            setLoading(false);
        }
    }

    //change profile info form
    const form = (
        <>
            <Form onSubmit={submit}>
                <p className="important">If you do not want to change some field just do not touch it</p>
                <div className="form-input-container">
                    <p>Phone :</p>
                    <div>
                        <input
                            className={phoneNumberError ? "error" : ""}
                            type="phone"
                            placeholder="phone"
                            value={phoneNumber}
                            onChange={event => setPhoneNumber(event.target.value)}
                            onBlur={
                                () => setPhoneNumberError(Boolean(!validator.isMobilePhone(phoneNumber)&&phoneNumber))
                            }
                        />
                    </div>

                </div>
                <div className="form-input-container">
                    <p>Username :</p>
                    <div>
                        <input
                            type="text"
                            placeholder="username"
                            value={username}
                            onChange={event => setUsername(event.target.value)}
                        />
                    </div>
                </div>
                <div className="form-input-container">
                    <p>Email<span style={{color: "red"}}>*</span> :</p>
                    <div>
                        <input
                            className={emailError ? "error" : ""}
                            type="text"
                            placeholder="email"
                            value={email}
                            onChange={event => setEmail(event.target.value)}
                            onBlur={
                                () => setEmailError(Boolean(!validator.isEmail(email)))
                            }
                        />
                    </div>
                </div>
                {
                    changePassword ?
                        <div className="form-input-container">
                            <p>New password:</p>
                            <div>
                                <input
                                    className={newPasswordError ? "error" : ""}
                                    type="password"
                                    placeholder="new password"
                                    value={newPassword}
                                    onChange={event => setNewPassword(event.target.value)}
                                />
                            </div>
                        </div> : null
                }
                <div className="form-input-container">
                    <p>
                        Old password
                        <span style={{color: "red"}}>*</span>
                        (also required for user deleting) :
                    </p>
                    <div>
                        <input
                            type="password"
                            placeholder="current password"
                            value={currentPassword}
                            onChange={event => setCurrentPassword(event.target.value)}
                        />
                    </div>
                </div>
                <div className="buttons-block">
                    <button type="submit">Save changes</button>
                    <button type="button" onClick={() => {
                        setChangePassword(!changePassword);
                        setNewPassword("");
                    }}>
                        {!changePassword ? "Change password" : "Do not change password"}
                    </button>
                    <button type="button" onClick={deleteChanges}>Delete changes</button>
                    <button type="button" onClick={
                        () => deleteUser(currentPassword)
                    }>Delete user</button>
                </div>
            </Form>
        </>
    );

    const getImageLink = async (event: ChangeEvent<HTMLInputElement>) => {
        beforeRequestToServer();
        if (!event?.target?.files) return;
        try {
            const {data: {imageUrl}} = await imageService.loadImageLink(event.target.files[0]);
            setNewImage(imageUrl);
            setIsImageChanged(true);
        } catch (error) {
            setError(error.response.data.message);
        } finally {
            setLoading(false);
        }
    }

    const deleteImage = async () => {
        beforeRequestToServer();
        try {
            await imageService.deleteImageLink();
            setNewImage("");
            setIsImageChanged(false);
        }catch (error){
            setError(error.response.data.message);
        }finally {
            setLoading(false);
        }
    }

    const saveNewImage = async () => {
        beforeRequestToServer();
        setLoading(true);
        try {
            await saveImage(newImage);
            setIsImageChanged(false);
            setInfo("Successfully saved");
        }catch (error) {
            setError(error.response.data.message);
        }finally {
            setLoading(false);
        }
    }

    return (
        <div className="profile-container">
            <div className="static-profile-data-container">
                <div className="avatar-container">
                    <input name="image" type="file" onChange={getImageLink}  accept="image/*"/>
                    <img
                        src={ifNotUndefined(newImage, getImageAvatar(user.imageUrl))}
                        alt="avatar"/>
                    <Icon name="plus"/>
                    {isImageChanged
                        ?
                        <div className="control-new-image-buttons-block">
                            <button onClick={saveNewImage} className="save-button">
                                <Icon name="save"/>
                            </button>
                            <button
                                onClick={deleteImage}
                                className="delete-button">
                                <Icon name="close"/>
                            </button>
                        </div>
                        : null
                    }
                </div>
                <div className="user-data-container">
                    <h2 className="profile-username">
                        {user.username ? user.username : "Enter your username downside"}
                    </h2>
                    <div>Email: {user.email}</div>
                    <div>
                        {user.phoneNumber
                            ? `Phone : ${user.phoneNumber}`
                            : "Enter your phone number downside"}
                    </div>
                    <button onClick={() => signOutUser()}>
                        Sign out
                    </button>
                </div>
            </div>
            <button onClick={() => {
                setChangeProfile(!changeProfile);
                setChangePassword(false);
            }}>
                {
                    !changeProfile
                        ? "Change your profile"
                        : "Do not change your profile"
                }
            </button>
            {changeProfile ? form : null}
        </div>
    );
}

type StateFromReduxType = {
    user: Profile
}

const mapStateToProps: MapStateToPropsType<StateFromReduxType> = state =>
    (
        {
            user: state.profile
        }
    );

const mapDispatchToProps = {
    change,
    signOut,
    del,
    saveChangedImage,
    setError,
    setInfo
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);
