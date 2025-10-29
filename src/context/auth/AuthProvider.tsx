import { useState, type ReactNode } from "react";
import { AuthContext } from "./authContext";

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [logged, setLogged] = useState(() => !!localStorage.getItem("token"));
    const [userEmail, setUserEmail] = useState<string | null>(localStorage.getItem("userEmail"));

    const login = (token: string, email: string) => {
        localStorage.setItem("token", token);
        localStorage.setItem("userEmail", email);
        setLogged(true);
        setUserEmail(email);
    };

    const logout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("userEmail");
        setLogged(false);
        setUserEmail(null);
    };

    return (
        <AuthContext.Provider value={{ logged, userEmail, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
