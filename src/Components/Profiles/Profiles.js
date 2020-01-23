import React from 'react';


const Profiles = React.memo(({loading, error, name, logout}) => {

    return (
        <div
            style={{
                height: '80vh',
                display: 'flex',
                flexFlow: 'column',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
            ProfilesPage

            {loading
                ? <div style={{color: 'orange'}}>loading...</div>
                : error
                    ? <div style={{color: 'red'}}>{error}</div>
                    : name
                        ? <div style={{color: 'green'}}>{name}</div>
                        : <div><br/></div>
            }

            <button onClick={logout}>logout</button>
        </div>
    );
});

export default Profiles;
