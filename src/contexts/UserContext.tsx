import Router from "next/router";
import { setCookie } from "nookies";
import { createContext, ReactNode, useEffect, useState } from "react";
import { getToken } from "../services/api";
import { getUserService, loginUserService } from "../services/userServices";
import { LoginFormData, User } from "../types/user";

type UserContextProps = {
    children: ReactNode
}

type UserContextType = {
    loading: boolean,
    errorText: string,
    setLoading: (newState: boolean) => void,
    loginUser: (data: LoginFormData) => void,
    user: User,
    isAuthenticated: boolean
}

export const UserContext = createContext<UserContextType>({} as UserContextType);

export const UserContextProvider = ({children}:UserContextProps)=>{
    const [ loading, setLoading ] = useState(false);
    const [ errorText, setErrorText ] = useState("");
    const [ user, setUser ] = useState<User | null>(null);
    const [ isAuthenticated, setIsAuthenticated ] = useState(!!user);

    useEffect(()=>{
        const token = getToken();

        if (token) {
            getUserService().then(response=>{
                setUser(response.data.user);
            });
        }
    },[]);

    const loginUser = async ({ email, senha }:LoginFormData) =>{
        try {
            setLoading(true);
            const auth = await loginUserService({
                email,
                senha
            });
            console.log(auth.data);
            const token = auth.data.token;
            const user = auth.data.user;
            setCookie(undefined,'@SCC/token',token,{
                maxAge: 60 * 60 * 1, // 1 hora
            });
            setUser(user);
            setLoading(false);
            setErrorText("");
            Router.push('/admin');
        } catch (error) {
            if (error.response) {
                setErrorText(error.response?.data?.message!!);
                // console.log("erro request: ",error.response.data.message);
            } else {
                setErrorText(error.message!!);
                // console.log("erro general: ", error.message);
            }
            setLoading(false);
        }
    }

    return (
        <UserContext.Provider value={{loading, errorText, setLoading, loginUser, user, isAuthenticated}}>
            {children}
        </UserContext.Provider>
    )
}