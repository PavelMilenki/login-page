import React from 'react';

const Register = React.memo(({
                                 loading, error, success, email, password, password2,
                                 setEmail, setPassword,
                                 setPassword2, setRegister
                             }) => {

    if (typeof error !== 'string') error = JSON.stringify(error);

    return (
        <div style={{
            height: '80vh',
            display: 'flex',
            flexFlow: 'column',
            alignItems: 'center',
            justifyContent: 'center'
        }}>

            Register

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
            <input value={password2}
                   onChange={e => setPassword2(e.currentTarget.value)}
                   type={'password'}/>

            <button onClick={setRegister}>Register</button>
        </div>
    );
});

export default Register;
