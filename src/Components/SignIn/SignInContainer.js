import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getMe} from "../../Redux/profileReducer";
import {emailValidator} from "../Helpers/emailValidator";
import {signIn, signInError, signInSuccess} from "../../Redux/sigInReducer";
import {passwordValidator} from "../Helpers/passwordValidator";
import {Redirect} from "react-router-dom";
import {PROFILE} from "../Routes";
import SignIn from "./SignIn";


const SignInContainer = React.memo(() => {

    const {loading, error, success} = useSelector((store) => store.signIn);
    const dispatch = useDispatch();
    const [email, setEmail] = useState('test@email.com');
    const [password, setPassword] = useState('testPassword');
    const [rememberMe, setRememberMe] = useState(false);
    const [redirect, setRedirect] = useState(false);

    useEffect(() => {
        dispatch(getMe());
    }, [dispatch]);

    const setSignIn = () => {
        if (!emailValidator(email)) {
            dispatch(signInError('Email not valid!'));
        } else if (!passwordValidator(password)) {
            dispatch(signInError(
                'Password not valid! must be more than 7 characters...'));
        } else {
            dispatch(signIn(email, password, rememberMe));
        }
    };

    if (success) {
        setTimeout(() => {
            setRedirect(true);
        }, 500);
    }
    if (redirect) {
        setTimeout(() => {
            dispatch(signInSuccess(false))
        }, 500);
        return <Redirect to={PROFILE}/>;
    }

    return (
        <SignIn
            loading={loading}
            error={error}
            success={success}
            email={email}
            password={password}
            rememberMe={rememberMe}
            setEmail={setEmail}
            setPassword={setPassword}
            setRememberMe={setRememberMe}
            setSignIn={setSignIn}/>
    );
});

export default SignInContainer;