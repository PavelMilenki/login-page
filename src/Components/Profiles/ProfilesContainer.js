import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Redirect} from "react-router";
import {getMe, profilesSetName} from "../../Redux/profileReducer";
import {getCookie, setCookie} from "../Helpers/cookies";
import {SIGN_IN} from "../Routes";
import Profiles from "./Profiles";


const ProfilesContainer = React.memo(() => {

    const {name, loading, error} = useSelector((store) => store.profile);
    const dispatch = useDispatch();
    const [show, setShow] = useState(false);
    const [redirect, setRedirect] = useState(false);

    useEffect(() => {
        dispatch(getMe());
    }, [dispatch]);

    useEffect(() => {
        if (!getCookie('token')) setRedirect(true);
        else setShow(true);
    }, [name]);

    const logout = () => {
        setCookie('token', '', -1000);
        dispatch(profilesSetName(''));
    };

    if (redirect) {
        return <Redirect to={SIGN_IN}/>;
    }
    if (!show) return (
        <div
            style={{
                height: '80vh',
                display: 'flex',
                flexFlow: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'orange',
            }}>
            Loading...
        </div>
    );

    return (
        <Profiles
            loading={loading}
            error={error}
            name={name}
            logout={logout}/>
    );
});

export default ProfilesContainer;
