import React, { useState } from "react";
import {connect} from "react-redux";
import {Segment, Form, Button} from "semantic-ui-react";
import {AxiosError} from "axios";
import isEmail from 'validator/lib/isEmail';
import {login} from "../../actions";

type Props = {
    login:Function
}

const LoginForm:React.FunctionComponent<Props> = ({login:loginUser}) => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [isLoading, setLoading] = useState<boolean>(false);
    const [isEmailValid, setIsEmailValid] = useState<boolean>(true);
    const [isPasswordValid, setIsPasswordValid] = useState<boolean>(true);
    const [error, setError] = useState<AxiosError|null>(null);
    const submit = async () => {
        const isValid = isEmailValid&&isPasswordValid;
        if(!isValid||isLoading) return;
        setLoading(true);
        setError(null);
        try {
            await loginUser({email, password})
        }catch (e){
            setError(e);
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
                {
                    error
                        ? <p className="error">{error.response?.data.message}</p>
                        : null
                }
                <Button type="submit" color="teal" fluid size="large" loading={isLoading} primary>
                    Login
                </Button>
            </Segment>
        </Form>
    )
}

const mapDispatchToProps = {
    login
}

export default connect(null, mapDispatchToProps)(LoginForm);
