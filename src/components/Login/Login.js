import React, { useContext } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import './Login.css';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { UserContext } from '../../App';
const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };
    if(firebase.apps.length === 0){
    firebase.initializeApp(firebaseConfig);
   }

   const handleGoogleSignIn = () => {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth()
    .signInWithPopup(provider)
    .then((result) => {
        const {displayName, email} = result.user;
        const signedInUser = {name: displayName, email: email};
        setLoggedInUser(signedInUser);
        history.replace(from);
    }).catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        var email = error.email;
        var credential = error.credential;
        // ...
    });
    }
    return (
        <div>
            <h2>Login to Continue</h2>
            <div >
            <form className="login-form" >
                <input className="user-email" name="email" type="text" placeholder="Enter Your Email" required/>
                <br/>
                <input className="user-password"type="password" name="password" placeholder="Enter your Password" required/>
                <br/>
                <input className="submit-btn" type="submit" value="Log in"/>
                <p>Don't have an account? <Link to="/">Create account</Link> </p>
                
            </form>
                <button onClick={handleGoogleSignIn} className="google-sign">Continue with Google</button>
                <br/>
                <button className="google-sign">Continue with Facebook</button>
            </div>
        </div>
    );
};

export default Login;