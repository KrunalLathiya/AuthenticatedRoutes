// src/components/Logout.jsx

import { useEffect } from 'react';
import { useNavigate } from '@tanstack/react-router';
import { useAuthContext } from '../context/AuthContext';

function Logout() {
    const { logout } = useAuthContext();
    const navigate = useNavigate();

    useEffect(() => {
        logout();
        navigate({ to: '/login' });
    }, [logout, navigate]);

    return null;
}

export default Logout;