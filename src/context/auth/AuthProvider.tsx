import { useReducer, type ReactNode } from "react";

import { INITIAL_STATE } from "../../constants/auth.constants";
import { AuthContext } from "./authContext";
import { authReducer } from "./authReducer";
import { ACTION_TYPES, type AuthContextProps, type UserDTO } from "./types";



const initialConfig = () => {
    const item: string | null = localStorage.getItem("user");
    // TODO: Agregar tipado de User cuando se defina el UserDTO
    const user = item ? JSON.parse(item) : undefined;
    return {
        logged: !!user,
        user,
    };
};

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [authState, dispatch] = useReducer(
        authReducer,
        INITIAL_STATE,
        initialConfig
    );
    // TODO: Revisar ésta función cuando se defina el UserDTO
    const login = (user: UserDTO) => {
        const userData = {
            id: user.id,
            name: user.name,
        };
        const action = {
            type: ACTION_TYPES.login,
            payload: userData,
        };
        localStorage.setItem("user", JSON.stringify(user));
        dispatch(action);
    };

    const logout = () => {
        localStorage.removeItem("user");
        const action = {
            type: ACTION_TYPES.logout,
        };
        dispatch(action);
    };

    return (
        <AuthContext.Provider value={{ ...authState, login, logout } as AuthContextProps}>
            {children}
        </AuthContext.Provider>
    );
};
