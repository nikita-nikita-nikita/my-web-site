import React, { useState } from "react";
import {connect} from "react-redux";
import {Segment, Form, Button} from "semantic-ui-react";
import isEmail from 'validator/lib/isEmail';
import {login} from "../../actions";
import {setInfo, setError} from "../../../Notifications/actions";

type Props = {
    login:Function
    setError:Function
    setInfo:Function
}

const LoginForm:React.FunctionComponent<Props> = ({login:loginUser, setInfo, setError}) => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [isLoading, setLoading] = useState<boolean>(false);
    const [isEmailValid, setIsEmailValid] = useState<boolean>(true);
    const [isPasswordValid, setIsPasswordValid] = useState<boolean>(true);
    const submit = async () => {
        if(!isEmailValid) setError("Invalid email");
        setLoading(true);
        try {
            await loginUser({email, password})
            setInfo("Welcome");
        }catch (e){
            setError(e.response.data.message);
        }finally {
            setLoading(false);
        }
    }
    return (
        <Form name="loginForm" size="large" onSubmit={submit}>
            <Segment>
                <Form.Input
                    fluid
                    icon="at"
                    iconPosition="left"
                    placeholder="Email"
                    type="email"
                    error={!isEmailValid}
                    onChange={ev => setEmail(ev.target.value)}
                    onBlur={() => setIsEmailValid(isEmail(email))}
                />
                <Form.Input
                    fluid
                    icon="lock"
                    iconPosition="left"
                    placeholder="Password"
                    type="password"
                    error={!isPasswordValid}
                    onChange={ev => setPassword(ev.target.value)}
                    onBlur={() => setIsPasswordValid(Boolean(password.length>=6))}
                />
                <Button type="submit" color="teal" fluid size="large" loading={isLoading} primary>
                    Login
                </Button>
            </Segment>
        </Form>
    )
}

const mapDispatchToProps = {
    login, setError, setInfo
}

export default connect(null, mapDispatchToProps)(LoginForm);
