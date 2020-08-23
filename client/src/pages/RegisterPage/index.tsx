import React from "react";
import {Link} from "react-router-dom";
import RegisterForm from "../../containers/ProfileContainer/auth/register";

const RegisterPage:React.FunctionComponent = () => {
    return(
        <main className="no-footer auth-form-container">
            <h2>Register</h2>
            <RegisterForm />
            <p>Already have an account? <Link to="/my-web-site/login">Sign in</Link></p>
        </main>
    );
}

export default RegisterPage;
