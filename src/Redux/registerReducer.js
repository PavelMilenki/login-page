import {passwordCoding} from "../Components/Helpers/passwordCoding";
import {registerAPI} from "../Api/api";

const REGISTER_LOADING = 'REGISTER/LOADING';
const REGISTER_ERROR = 'REGISTER/ERROR';
const REGISTER_SUCCESS = 'REGISTER/SUCCESS';

const registerInitialState = {
    loading: false,
    error: '',
    success: false
};

export const registerReducer = (state = registerInitialState, action) => {
    switch (action.type) {
        case REGISTER_LOADING: {
            return {
                ...state,
                loading: action.loading,
                error: '',
                success: false,
            }
        }
        case REGISTER_SUCCESS: {
            return {
                ...state,
                loading: false,
                error: '',
                success: action.success,
            }
        }
        case REGISTER_ERROR: {
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

export const registerLoading = (loading) => ({
    type: REGISTER_LOADING,
    loading,
});
export const registerSuccess = (success) => ({
    type: REGISTER_SUCCESS,
    success,
});
export const registerError = (error) => ({
    type: REGISTER_ERROR,
    error,
});

export const register = (email, password) => async (dispatch) => {
    dispatch(registerLoading(true));
    try {
        const data = await registerAPI.register(email, passwordCoding(password));
        if (data.error) {
            dispatch(registerError(data.error));
        } else {
            dispatch(registerSuccess(true));
        }
    } catch (e) {
        dispatch(registerError(e.message));
    }
};

