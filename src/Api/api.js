import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://dry-forest-56016.herokuapp.com/auth'
    // baseURL: 'https://ancient-gorge-20298.herokuapp.com/auth'
});

export const signInAPI = {
    signIn: async (email, password, rememberMe) => {
        const response = await instance.post('/login',
            {email, password, rememberMe});
        return response.data;
    },
};
export const registerAPI = {
    register: async (email, password) => {
        const response = await instance.post('/register', {email, password});
        return response.data;
    },
};
export const forgotAPI = {
    forgot: async (email) => {
        const response = await instance.post('/forgot', {email});
        return response.data;
    },
};
export const profilesAPI = {
    getMe: async (token) => {
        const response = await instance.post('/me', {token});
        return response.data;
    },
};