import {getCookie, setCookie} from "../Components/Helpers/cookies";
import {signInSuccess} from "./sigInReducer";
import {profilesAPI} from "../Api/api";

const PROFILES_LOADING = 'PROFILES/LOADING';
const PROFILES_ERROR = 'PROFILES/ERROR';
const PROFILES_SET_NAME = 'PROFILES/SET_NAME';

const profilesInitialState = {
    loading: false,
    error: '',
    name: '',
};

export const profilesReducer = (state = profilesInitialState, action) => {
    switch (action.type) {
        case PROFILES_LOADING: {
            return {
                ...state,
                loading: action.loading,
                error: '',
            }
        }
        case PROFILES_ERROR: {
            return {
                ...state,
                loading: false,
                error: action.error,
            }
        }
        case PROFILES_SET_NAME: {
            return {
                ...state,
                name: action.name,
                loading: false,
                error: '',
            }
        }
        default: {
            return state;
        }
    }
};

export const profilesLoading = (loading) => ({
    type: PROFILES_LOADING,
    loading,
});
export const profilesError = (error) => ({
    type: PROFILES_ERROR,
    error,
});
export const profilesSetName = (name) => ({
    type: PROFILES_SET_NAME,
    name,
});

export const getMe = () => async (dispatch) => {
    dispatch(profilesLoading(true));
    const token = getCookie('token') || '';
    try {
        const data = await profilesAPI.getMe(token);
        if (data.error) {
            dispatch(profilesError(data.error));
            setCookie('token', '', -1000);
        } else {
            setCookie('token', data.token, 60 * 60 * 48); // 2 days
            dispatch(profilesSetName(data.name));
            dispatch(signInSuccess(true));
        }
    } catch (e) {
        dispatch(profilesError(e.message));
    }
};




