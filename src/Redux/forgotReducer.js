import {forgotAPI} from "../Api/api";

const FORGOT_LOADING = 'FORGOT/LOADING';
const FORGOT_ERROR = 'FORGOT/ERROR';
const FORGOT_SUCCESS = 'FORGOT/SUCCESS';

const forgotInitialState = {
    loading: false,
    error: '',
    success: false
};

export const forgotReducer = (state = forgotInitialState, action) => {
    switch (action.type) {
        case FORGOT_LOADING: {
            return {
                ...state,
                loading: action.loading,
                error: '',
                success: false,
            }
        }
        case FORGOT_SUCCESS: {
            return {
                ...state,
                loading: false,
                error: '',
                success: action.success,
            }
        }
        case FORGOT_ERROR: {
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

export const forgotLoading = (loading) => ({
    type: FORGOT_LOADING,
    loading,
});
export const forgotError = (error) => ({
    type: FORGOT_ERROR,
    error,
});
export const forgotSuccess = (success) => ({
    type: FORGOT_SUCCESS,
    success,
});
export const forgot = (email) => async (dispatch) => {
    dispatch(forgotLoading(true));
    try {
        const data = await forgotAPI.forgot(email);
        if (data.error) {
            dispatch(forgotError(data.error));
        } else {
            dispatch(forgotSuccess(true));
        }
    } catch (e) {
        dispatch(forgotError(e.response.data.error));
    }
};
