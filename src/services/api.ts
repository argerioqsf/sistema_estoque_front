import axios, { AxiosInstance } from 'axios';
const API_URL = 'http://localhost:3333'

const getToken = () => {
    const token = localStorage.getItem('@SCC/token');
    return token;
}

export const apiWithToken = ():AxiosInstance => {
    const token = getToken();
    return axios.create(
        {
        baseURL: API_URL,
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': `Bearer ${token}`
        }
        }
    )
};