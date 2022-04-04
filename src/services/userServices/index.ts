import { AxiosResponse } from 'axios';
import { LoginFormData } from '../../types/user';
import { apiWithToken } from '../api';
const resouceUrl = '/usuario';

export const loginUserService = async (data:LoginFormData): Promise<AxiosResponse> => {
    const api = apiWithToken();
    return await api.post(`${resouceUrl}/login`, data);
};
