import React from "react";

export const AuthContext = React.createContext();

export const UserAuthProvider = ({ children }) => {
    return (
        <AuthContext.Provider value=''>
            {children}
        </AuthContext.Provider>
    );
};