import React,{createContext,useContext,useState} from "react";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({children}) => {
        const [authData, setAuthData] = useState({
            isAuthenticated: false,
            user: null,
            role: null,
            accessToken: null,

    });

    const login = (userData) => {
        setAuthData({
            isAuthenticated: true,
            ...userData,
        });
    };

    const logout = () => {
        setAuthData({
            isAuthenticated: false,
            user: null,
            role: null,
            accessToken: null,
        });
        localStorage.clear(); // Clear tokens and role from localStorage
    };

    return (
        <AuthContext.Provider value={{ authData, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};