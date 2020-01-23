import React from 'react';
import {Redirect, Route} from "react-router-dom";
import SignInContainer from "./SignIn/SignInContainer";
import RegisterContainer from "./Register/RegisterContainer";
import ForgotContainer from "./Forgot/ForgotContainer";
import ProfilesContainer from "./Profiles/ProfilesContainer";

export const SIGN_IN = '/sign-in';
export const REGISTER = '/register';
export const FORGOT = '/forgot';
export const PROFILE = '/profile';


const Routes = React.memo(() => {
    return (
        <>
            <Route exact path={'/'} render={() => <Redirect to={SIGN_IN}/>}/>
            <Route path={SIGN_IN} render={() => <SignInContainer/>}/>
            <Route path={REGISTER} render={() => <RegisterContainer/>}/>
            <Route path={FORGOT} render={() => <ForgotContainer/>}/>
            <Route path={PROFILE} render={() => <ProfilesContainer/>}/>
        </>
    );
});

export default Routes;
