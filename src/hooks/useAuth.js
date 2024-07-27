// src/hook/useAuth.js

import { useState, useEffect } from 'react';

export function useAuth() {
    const [isAuthenticated, setIsAuthenticated] = useState(() => {
        return localStorage.getItem('isAuthenticated') === 'true';
    });

    useEffect(() => {
        localStorage.setItem('isAuthenticated', isAuthenticated);
    }, [isAuthenticated]);

    const login = () => setIsAuthenticated(true);

    const logout = () => {
        setIsAuthenticated(false);
        localStorage.removeItem('isAuthenticated');
    };

    return { isAuthenticated, login, logout };
}

// Add this function for non-hook usage
export function checkAuth() {
    return localStorage.getItem('isAuthenticated') === 'true';
}