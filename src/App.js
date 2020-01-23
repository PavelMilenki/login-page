import React from 'react';
import './App.css';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import store from "./Redux/store";
import Header from "./Components/Header";
import Routes from "./Components/Routes";

const App = React.memo(() => {
    return (
        <div className="App">
            <BrowserRouter>
                <Provider store={store}>
                    <Header/>
                    <Routes/>
                </Provider>
            </BrowserRouter>
        </div>
    );
});

export default App;
