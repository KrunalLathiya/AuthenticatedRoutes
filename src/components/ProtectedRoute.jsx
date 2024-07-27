// src/components/ProtectedRoute.jsx

import { useEffect } from 'react';
import { useNavigate } from '@tanstack/react-router';
import { checkAuth } from '../hooks/useAuth';

function ProtectedRoute({ children }) {
    const navigate = useNavigate();

    useEffect(() => {
        if (!checkAuth()) {
            navigate({
                to: '/login',
                search: {
                    redirect: window.location.pathname,
                },
            });
        }
    }, [navigate]);

    return checkAuth() ? children : null;
}

export default ProtectedRoute;