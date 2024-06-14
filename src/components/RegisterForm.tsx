import { useState } from 'react';
import { TextField, Button, Container, Typography, Link } from '@mui/material';
import axios from 'axios';
import { Link as RouterLink } from 'react-router-dom';

const RegisterForm = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async () => {
    try {
      const response = await axios.post('https://user-management-backend-one.vercel.app/auth/register', { username, email, password });
      alert('Registration successful');
      console.log(response.data);
      // Redirect to login or other appropriate page
    } catch (error) {
      alert('Registration failed');
      console.error(error);
    }
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" gutterBottom>Register</Typography>
      <TextField
        label="Username"
        fullWidth
        margin="normal"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
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
      <Button variant="contained" color="primary" fullWidth onClick={handleRegister}>Register</Button>
      <Typography variant="body2" align="center" marginTop="16px">
        Already have an account? <Link component={RouterLink} to="/login">Log back in</Link>
      </Typography>
    </Container>
  );
};

export default RegisterForm;