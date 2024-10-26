import React, { createContext, useState, useEffect } from 'react';

// Create the AuthContext
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    // Initialize userData with a default value from localStorage if it exists
    const [userData, setUserData] = useState(() => {
        const savedData = localStorage.getItem('userData');
        return savedData ? JSON.parse(savedData) : null;
    });

    // Save userData to localStorage whenever it changes
    useEffect(() => {
        if (userData) {
            localStorage.setItem('userData', JSON.stringify(userData));
        } else {
            localStorage.removeItem('userData');
        }
    }, [userData]);

    return (
        <AuthContext.Provider value={{ userData, setUserData }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

