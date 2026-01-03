import React, { createContext, useContext, useState, useEffect } from 'react';
import { storageService } from '../services/storageService';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Initialize data storage on boot
        storageService.initialize();

        // Check local storage for session (Mock session persistence)
        const storedUser = localStorage.getItem('rapidblood_session');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
        setLoading(false);
    }, []);

    const login = async (email, password) => {
        // Simulate network delay
        await new Promise(resolve => setTimeout(resolve, 800));

        const userAccount = storageService.getUserByEmail(email);

        if (userAccount && userAccount.password === password) {
            // Remove password from state
            const { password: _, ...safeUser } = userAccount;
            setUser(safeUser);
            localStorage.setItem('rapidblood_session', JSON.stringify(safeUser));
            return { success: true };
        }
        return { success: false, error: 'Invalid email or password' };
    };

    const logout = async () => {
        setUser(null);
        localStorage.removeItem('rapidblood_session');
    };

    const register = async (userData) => {
        // TODO: Implement registration for new users
        // adding to local storage users list
        return { success: false, error: "Public registration not active in demo. Use 'admin@rapidblood.com' / 'admin'" };
    };

    const value = {
        user,
        login,
        logout,
        register,
        loading
    };

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    );
};
