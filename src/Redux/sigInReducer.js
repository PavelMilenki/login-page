import {passwordCoding} from "../Components/Helpers/passwordCoding";
import {setCookie} from "../Components/Helpers/cookies";
import {profilesSetName} from "./profileReducer";
import {signInAPI} from "../Api/api";

const SIGN_IN_LOADING = 'SIGN_IN/LOADING';
const SIGN_IN_ERROR = 'SIGN_IN/ERROR';
const SIGN_IN_SUCCESS = 'SIGN_IN/SUCCESS';

const signInInitialState = {
    loading: false,
    error: '',
    success: false
};

export const sigInReducer = (state = signInInitialState, action) => {
    switch (action.type) {
        case SIGN_IN_LOADING: {
            return {
                ...state,
                loading: action.loading,
                error: '',
                success: false,
            }
        }
        case SIGN_IN_SUCCESS: {
            return {
                ...state,
                loading: false,
                error: '',
                success: action.success,
            }
        }
        case SIGN_IN_ERROR: {
            return {
                ...state,
                loading: false,
                error: action.error,
                success: false,
            }
        }
        default: {
            return state;
        }
    }
};

export const signInLoading = (loading) => ({
    type: SIGN_IN_LOADING,
    loading,
});
export const signInError = (error) => ({
    type: SIGN_IN_ERROR,
    error,
});
export const signInSuccess = (success) => ({
    type: SIGN_IN_SUCCESS,
    success,
});
export const signIn = (email, password, rememberMe) => async (dispatch) => {
    dispatch(signInLoading(true));
    try {
        const data = await signInAPI.signIn(
            email, passwordCoding(password), rememberMe);
        if (data.error) {
            dispatch(signInError(data.error));
        } else {
            dispatch(profilesSetName(data.name));
            setCookie('token', data.token, 60 * 60 * 48);
            dispatch(signInSuccess(true));
        }
    } catch (e) {
        dispatch(signInError(e.message));
    }
};




