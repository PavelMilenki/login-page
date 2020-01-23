import React, {useState} from 'react';
import {NavLink} from "react-router-dom";
import {FORGOT, PROFILE, REGISTER, SIGN_IN} from "./Routes";


const Header = React.memo(() => {
    const [show, setShow] = useState(true);
    return (
        <div style={{
            display: 'flex',
            flexFlow: 'row',
            alignItems: 'center',
            justifyContent: 'space-around'
        }}>
            <button onClick={() => setShow(!show)}>{show ? 'hide' : 'show'}</button>

            {show && <NavLink to={SIGN_IN}>sign-in</NavLink>}
            {show && <NavLink to={REGISTER}>register</NavLink>}
            {show && <NavLink to={FORGOT}>forgot</NavLink>}
            {show && <NavLink to={PROFILE}>profile</NavLink>}

        </div>
    );
});

export default Header;
