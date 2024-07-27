// src/components/Login.jsx

import { useState } from 'react'
import { useNavigate } from '@tanstack/react-router'
import { Button, TextField, Typography, Box } from '@mui/material'
import { useAuthContext } from '../context/AuthContext'


function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const { login } = useAuthContext()
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    login()
    navigate({ to: '/dashboard' })
  }

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ maxWidth: 300, margin: 'auto' }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Login
      </Typography>
      <TextField
        fullWidth
        margin="normal"
        label="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <TextField
        fullWidth
        margin="normal"
        label="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button type="submit" variant="contained" sx={{ mt: 2 }}>
        Login
      </Button>
    </Box>
  )
}

export default Login