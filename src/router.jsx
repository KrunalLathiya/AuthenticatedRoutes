// src/router.jsx

import { createRootRoute, createRoute, createRouter, redirect } from '@tanstack/react-router';
import Layout from './components/Layout';
import Home from './components/Home';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Logout from './components/Logout';
import { checkAuth } from './hooks/useAuth';


const rootRoute = createRootRoute({
    component: Layout,
});

const indexRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '/',
    component: Home,
});

const loginRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '/login',
    component: Login,
});

const dashboardRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '/dashboard',
    component: Dashboard,
    beforeLoad: async () => {
        if (!checkAuth()) {
            throw redirect({
                to: '/login',
                search: {
                    redirect: '/dashboard',
                },
            });
        }
    },
});

const logoutRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '/logout',
    component: Logout,
});

const routeTree = rootRoute.addChildren([indexRoute, loginRoute, dashboardRoute, logoutRoute]);

const router = createRouter({ routeTree });

export default router;