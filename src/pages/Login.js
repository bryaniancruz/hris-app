import React from 'react';
import { Box, Card, CardContent, Typography, TextField, Button, Link } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function Login({ onLogin }) {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    onLogin();
    navigate('/dashboard');
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        bgcolor: 'background.default',
        p: 2,
      }}
    >
      <Card sx={{ width: '100%', maxWidth: 420, borderRadius: 3, boxShadow: 4 }}>
        <CardContent>
          <Typography variant="h5" component="h1" gutterBottom>
            Sign in to HRIS-APP
          </Typography>
          <Typography color="textSecondary" sx={{ mb: 3 }}>
            Enter your credentials to access the dashboard.
          </Typography>
          <Box component="form" onSubmit={handleSubmit} sx={{ display: 'grid', gap: 2 }}>
            <TextField label="Email address" type="email" required fullWidth />
            <TextField label="Password" type="password" required fullWidth />
            <Button type="submit" variant="contained" size="large" fullWidth>
              Sign In
            </Button>
          </Box>
          <Typography variant="body2" sx={{ mt: 2, textAlign: 'center' }}>
            Forgot password?{' '}
            <Link href="#" underline="hover">
              Reset
            </Link>
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}

export default Login;
