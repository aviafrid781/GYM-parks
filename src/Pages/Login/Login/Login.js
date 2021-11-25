
import { getAuth } from '@firebase/auth';
import React, { useState } from 'react';
import { signInWithEmailAndPassword } from '@firebase/auth';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import './Login.css'



const Login = () => {



    const { user, setIsLoading, setUser, signInUsingGoogle } = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const location = useLocation();
    const history = useHistory();

    const redirect_url = location.state?.from || '/home';
    //googleSign In

    const handleGoogleLogin = () => {
        signInUsingGoogle()

            .then(result => {
                history.push(redirect_url);

            });
    }




    const handleEmail = (e) => {
        setEmail(e.target.value);
    }
    const handlePassword = (e) => {
        setPassword(e.target.value);
    }


    //Handle email/password sign in
    const handleLogin = (e) => {

        e.preventDefault();
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Login in 
                const user = userCredential.user;
                setUser(user)

                history.push(redirect_url);
                console.log("successfully login")
                    // console.log(user)
                    .finally(() => setIsLoading(false));

            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            });
    }




    return (
        <div className="login-container">
            <h1>Please login</h1>
            <div>


                <form  >
                    <input type="email" name="email" id="" placeholder="Your email" />
                    <br />
                    <br />
                    <input type="password" name="password" id="" placeholder="password" />
                    <br />
                    <br />
                    <input onClick={handleLogin} type="submit" value="Submit" />

                </form>
                <p>New to GYM Park?<Link to="/register">create account</Link> </p>

                <div>......or........</div>
                <button className="regular-button"
                    onClick={handleGoogleLogin}
                >Google Signin</button>

            </div>


            <div>
                <br />
                <br />
                <br />

            </div>




        </div>
    );
};

export default Login;