import { useState, type ReactNode } from "react";

import { AuthContext } from "./authContext";

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [logged, setLogged] = useState(!!localStorage.getItem("token"));

    const login = (token: string) => {
        localStorage.setItem("token", token);
        setLogged(true);
    };

    const logout = () => {
        localStorage.removeItem("token");
        setLogged(false);
    };

    return (
        <AuthContext.Provider value={{ logged, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
