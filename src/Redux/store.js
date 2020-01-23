import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from "redux-thunk"
import {sigInReducer} from './sigInReducer'
import {registerReducer} from './registerReducer'
import {forgotReducer} from './forgotReducer'
import {profilesReducer} from './profileReducer'

const reducers = combineReducers({
    signIn: sigInReducer,
    register: registerReducer,
    forgot: forgotReducer,
    profile: profilesReducer
});

const store = createStore(reducers, applyMiddleware(thunkMiddleware));
export default store
window._store_ = store;