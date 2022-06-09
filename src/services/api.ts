import axios, { AxiosInstance } from 'axios';
import { destroyCookie, parseCookies } from 'nookies';
const API_URL = 'http://localhost:3333'

export const getToken = () => {
    const {'@SCC/token': token} = parseCookies();
    return token;
}

export const destroyToken = (ctx?) => {
    destroyCookie(ctx??null,'@SCC/token')
}

export const delay = (amount = 750) => new Promise(resolve => setTimeout(resolve, amount))

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