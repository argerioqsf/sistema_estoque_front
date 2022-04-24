import { AxiosResponse } from 'axios';
import { LoginFormData } from '../../types/user';
import { apiWithToken, delay } from '../api';
const resouceUrl = '/usuario';

export const loginUserService = async (data:LoginFormData): Promise<AxiosResponse> => {
    const api = apiWithToken();
    await delay();
    return await api.post(`${resouceUrl}/login`, data);
};

export const getUserService = async (): Promise<AxiosResponse> => {
    const api = apiWithToken();
    await delay();
    return await api.get(`${resouceUrl}/info`);
};