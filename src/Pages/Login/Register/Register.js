import React, { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, updateProfile, signInWithPopup, GoogleAuthProvider, signInWithEmailAndPassword } from "firebase/auth";
import { Link } from 'react-router-dom';




const Register = () => {

    const auth = getAuth();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const [isLogin, setLogin] = useState(false);


    const handleNameChange = e => {
        setName(e.target.value);
    }
    const handleEmailChange = e => {
        setEmail(e.target.value);
    }
    const handlePasswordChange = e => {

        setPassword(e.target.value);

    }

    const handleRegistation = e => {
        e.preventDefault();
        if (password.length < 6) {
            setError('Password must be 6 characters long')
            return;
        }
        if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
            setError('password Must be 2 upper Case');
            return;
        }
        console.log(email, password);

        //isLogin ? processLogin(email, password) : registerNewUser(email, password);
        if (isLogin) {
            processLogin(email, password);
        }
        else {
            registerNewUser(email, password);
        }

    }
    //login process
    const processLogin = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('');
            })

            .catch(error => {
                setError(error.message);
            })
    }

    const registerNewUser = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('');

                setUserName();

            })

            .catch(error => {
                setError(error.messsage);
            })
    }

    //update name
    const setUserName = () => {
        updateProfile(auth.currentUser, {
            displayName: name
        })
            .then(result => { })
    }







    return (
        <div className="login-form">
            <div>

                <h2> Register: Create Account</h2>
                <form onSubmit={handleRegistation}>

                    <input onBlur={handleNameChange} type="text" name="name" id="" placeholder="Your name" required />
                    <br /><br />
                    <input onBlur={handleEmailChange} type="email" name="" id="" placeholder="Your email" required />
                    <br /><br />
                    <input onBlur={handlePasswordChange} type="password" name="password" id="" placeholder="password" required />
                    <br /><br />
                    <input onBlur={handlePasswordChange} type="password" name="password" id="" placeholder="Re-enter Your password" required />
                    <br /><br />
                    <div>{error}</div>
                    <input className="regular-button" type="submit" value="Submit" />

                </form>
                <p>Already have an Account?<Link to="/login">Login</Link></p>




            </div>
            <div>
                <br />
                <br />
                <br />

            </div>

        </div>
    );
};

export default Register;