import React, {useState} from 'react';
import {register, registerError, registerSuccess} from '../../Redux/registerReducer'
import {useDispatch, useSelector} from "react-redux";
import {Redirect} from "react-router-dom";
import {emailValidator} from "../Helpers/emailValidator";
import {passwordValidator} from "../Helpers/passwordValidator";
import Register from "./Register";
import {SIGN_IN} from "../Routes";


const RegisterContainer = React.memo(() => {

    const {loading, error, success} = useSelector((store) => store.register);
    const dispatch = useDispatch();
    const [email, setEmail] = useState('test@email.com');
    const [password, setPassword] = useState('testPassword');
    const [password2, setPassword2] = useState('testPassword');
    const [redirect, setRedirect] = useState(false);

    const setRegister = () => {
        if (!emailValidator(email)) {
            dispatch(registerError('Email not valid!'));
        } else if (!passwordValidator(password)) {
            dispatch(registerError('Password not valid must be more than 7 characters'));
        } else if (password !== password2) {
            dispatch(registerError('Passwords do not match'));
        } else {
            dispatch(register(email, password));
        }
    };

    if (success) {
        setTimeout(() => setRedirect(true), 500)
    }
    if (redirect) {
        setTimeout(() => {
            dispatch(registerSuccess(false))
        }, 500);
        return <Redirect to={SIGN_IN}/>;
    }

    return (
        <div>
            <Register
                loading={loading}
                error={error}
                success={success}
                email={email}
                password={password}
                password2={password2}
                setEmail={setEmail}
                setPassword={setPassword}
                setPassword2={setPassword2}
                setRegister={setRegister}/>
        </div>
    );
});


export default (RegisterContainer);
