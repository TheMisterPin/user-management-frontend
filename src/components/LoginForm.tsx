import { useState } from 'react';
import { TextField, Button, Container, Typography, Link } from '@mui/material';
import axios from 'axios';
import { useNavigate, Link as RouterLink } from 'react-router-dom';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post('https://user-management-backend-one.vercel.app/auth/login', { email, password });
      alert('Login successful');
      localStorage.setItem('token', response.data.accessToken);
      navigate('/profile'); // Redirect to profile page
    } catch (error) {
      alert('Login failed');
      console.error(error);
    }
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" gutterBottom>Login</Typography>
      <TextField
        label="Email"
        type="email"
        fullWidth
        margin="normal"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextField
        label="Password"
        type="password"
        fullWidth
        margin="normal"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button variant="contained" color="primary" fullWidth onClick={handleLogin}>Login</Button>
      <Typography variant="body2" align="center" marginTop="16px">
        New here? <Link component={RouterLink} to="/register">Register</Link>
      </Typography>
    </Container>
  );
};

export default LoginForm;
