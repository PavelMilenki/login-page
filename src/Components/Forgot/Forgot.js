import React from 'react';

const Forgot = React.memo(
    ({loading, error, success, email, setEmail, setForgot}) => {
    if (typeof error !== 'string') error = JSON.stringify(error);

    return (
        <div
            style={{
                height: '80vh',
                display: 'flex',
                flexFlow: 'column',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
            forgot

            {loading
                ? <div style={{color: 'orange'}}>loading...</div>
                : error
                    ? <div style={{color: 'red'}}>{error}</div>
                    : success
                        ? <div style={{color: 'green'}}>Success!</div>
                        : <div><br/></div>
            }

            <input value={email} onChange={e => setEmail(e.currentTarget.value)}/>
            <button onClick={setForgot}>Send email</button>
        </div>
    );
});

export default Forgot;

