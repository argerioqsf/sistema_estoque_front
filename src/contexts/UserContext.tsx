import { createContext, ReactNode, useState } from "react";
import { loginUserService } from "../services/userServices";
import { LoginFormData } from "../types/user";

type UserContextProps = {
    children: ReactNode
}

type UserContextType = {
    loading: boolean,
    setLoading: (newState: boolean) => void,
    loginUser: (data: LoginFormData) => void
}

export const UserContext = createContext<UserContextType>({} as UserContextType);

export const UserContextProvider = ({children}:UserContextProps)=>{
    const [ loading, setLoading ] = useState(false);

    const loginUser = async (data:LoginFormData) =>{
        try {
            setLoading(true);
            await loginUserService(data);
            setLoading(false);
        } catch (error) {
            console.log(error.message);
            setLoading(false);
        }
    }

    return (
        <UserContext.Provider value={{loading, setLoading, loginUser}}>
            {children}
        </UserContext.Provider>
    )
}