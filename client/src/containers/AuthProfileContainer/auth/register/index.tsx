import React, {useState} from "react";
import {connect} from "react-redux";
import {AxiosError} from 'axios';
import {Segment, Form, Button} from "semantic-ui-react";
import {register} from "../../actions";
import isEmail from 'validator/lib/isEmail';
type Props = {
    register:Function
}

const RegisterForm:React.FunctionComponent<Props> = ({register:registerUser}) => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [confirmedPassword, setConfirmedPassword] = useState<string>('');
    const [isLoading, setLoading] = useState<boolean>(false);
    const [isEmailValid, setEmailValid] = useState<boolean>(true);
    const [isPasswordValid, setPasswordValid] = useState<boolean>(true);
    const [error, setError] = useState<AxiosError|null>(null);
    const submit = async () => {
        const isValid = isEmailValid&&isPasswordValid;
        if(!isValid||isLoading) return;
        setError(null);
        setLoading(true);
        try {
            await registerUser({email, password})
        }catch (e){
            setError(e);
        }finally {
            setLoading(false);
        }
    }
    return (
        <Form name="registrationForm" size="large" onSubmit={submit}>
            <Segment>
                <Form.Input
                    fluid
                    icon="at"
                    iconPosition="left"
                    placeholder="Email"
                    type="email"
                    error={!isEmailValid}
                    onChange={ev => setEmail(ev.target.value)}
                    onBlur={() => setEmailValid(isEmail(email))}
                />
                <Form.Input
                    fluid
                    icon="lock"
                    iconPosition="left"
                    placeholder="Password"
                    type="password"
                    onChange={ev => setPassword(ev.target.value)}
                    error={!isPasswordValid}
                    onBlur={() => setPasswordValid(password.length>=6)}
                />
                <Form.Input
                    fluid
                    icon="lock"
                    iconPosition="left"
                    placeholder="Password"
                    type="password"
                    onChange={ev => setConfirmedPassword(ev.target.value)}
                    error={!isPasswordValid}
                    onBlur={() => setPasswordValid(password===confirmedPassword)}
                />
                <Button type="submit" color="teal" fluid size="large" loading={isLoading} primary>
                    Register
                </Button>
                {
                    error
                        ? <p className="error">{error.response?.data.message}</p>
                        : null
                }
            </Segment>
        </Form>
    );
}

const mapDispatchToProps = {
    register
};

export default connect(null, mapDispatchToProps)(RegisterForm)
