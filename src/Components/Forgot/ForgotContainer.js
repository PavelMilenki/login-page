import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import Forgot from './Forgot';
import {Redirect} from "react-router";
import {emailValidator} from "../Helpers/emailValidator";
import {forgot, forgotError, forgotSuccess} from "../../Redux/forgotReducer";
import {SIGN_IN} from "../Routes";


const ForgotContainer = React.memo( () => {

    const {loading, error, success} = useSelector((store) => store.forgot);
    const dispatch = useDispatch();
    const [email, setEmail] = useState('test@email.com');
    const [redirect, setRedirect] = useState(false);

    const setForgot = () => {
        if (emailValidator(email)) {
            dispatch(forgot(email));
        } else {
            dispatch(forgotError('Email not valid!'));
        }
    };

    if (success) {
        setTimeout(() => setRedirect(true), 500)
    }
    if (redirect) {
        setTimeout(() => {
            dispatch(forgotSuccess(false))
        }, 500);
        return <Redirect to={SIGN_IN}/>;
    }

    return (
        <Forgot
            loading={loading}
            error={error}
            success={success}
            email={email}
            setEmail={setEmail}
            setForgot={setForgot}/>
    );
});

export default ForgotContainer;
