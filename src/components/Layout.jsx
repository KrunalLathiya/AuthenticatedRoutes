// src/components/Layout.jsx

import { Outlet, Link, useNavigate } from '@tanstack/react-router'
import { AppBar, Toolbar, Typography, Button, Container } from '@mui/material'
import { useAuthContext } from '../context/AuthContext'

function Layout() {
    const { isAuthenticated, logout } = useAuthContext()
    const navigate = useNavigate()

    const handleLogout = () => {
        logout()
        navigate({ to: '/login' })
    }

    return (
        <>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Protected Routes Demo
                    </Typography>
                    <Button color="inherit" component={Link} to="/">
                        Home
                    </Button>
                    {isAuthenticated ? (
                        <>
                            <Button color="inherit" component={Link} to="/dashboard">
                                Dashboard
                            </Button>
                            <Button color="inherit" onClick={handleLogout}>
                                Logout
                            </Button>
                        </>
                    ) : (
                        <Button color="inherit" component={Link} to="/login">
                            Login
                        </Button>
                    )}
                </Toolbar>
            </AppBar>
            <Container sx={{ mt: 4 }}>
                <Outlet />
            </Container>
        </>
    )
}

export default Layout