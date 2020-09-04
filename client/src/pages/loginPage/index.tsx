import React from "react";
import {Link} from "react-router-dom";
import LoginForm from "../../containers/AuthProfileContainer/auth/login";

const LoginPage:React.FunctionComponent = () => {
    return(
        <main className="no-footer auth-form-container">
            <h2>Login</h2>
            <LoginForm />
            <p>Don't have an account? <Link to="/my-web-site/register">Sign up</Link></p>
        </main>
    );
}

export default LoginPage;
