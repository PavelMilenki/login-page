import React from 'react';
import {NavLink} from "react-router-dom";
import {FORGOT, REGISTER} from "../Routes";


const SignIn = React.memo(
    ({
         loading, error, success, email, password, rememberMe,
         setEmail, setPassword, setRememberMe, setSignIn
     }) => {
        if (typeof error !== 'string') error = JSON.stringify(error);

        return (
            <div
                style={{
                    height: '80vh',
                    display: 'flex',
                    flexFlow: 'column',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
                sign-in

                {loading
                    ? <div style={{color: 'orange'}}>loading...</div>
                    : error
                        ? <div style={{color: 'red'}}>{error}</div>
                        : success
                            ? <div style={{color: 'green'}}>Success!</div>
                            : <div><br/></div>
                }

                <input value={email}
                       onChange={e => setEmail(e.currentTarget.value)}/>
                <input value={password}
                       onChange={e => setPassword(e.currentTarget.value)}
                       type={'password'}/>

                <NavLink to={FORGOT}>Forgot password?</NavLink>

                <div>
                    <input
                        type={'checkbox'}
                        checked={rememberMe}
                        onChange={e => setRememberMe(e.currentTarget.checked)}
                    />
                    Remember Me
                </div>
                <button onClick={setSignIn}>Sign In</button>

                <NavLink to={REGISTER}>Registration</NavLink>
            </div>
        );
    });

export default SignIn;

