import React, { useEffect } from 'react';
import { Typography, Card, CardContent, Box, Button } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from 'react-router-dom';

function Logout({ onLogout }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    if (typeof onLogout === 'function') {
      onLogout();
    }
    navigate('/login');
  };

  const handleCancel = () => {
    navigate('/dashboard');
  };

  useEffect(() => {
    // Auto-logout after 3 seconds
    const timer = setTimeout(() => {
      handleLogout();
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '60vh',
      }}
    >
      <Card sx={{ maxWidth: 400 }}>
        <CardContent sx={{ textAlign: 'center', py: 4 }}>
          <LogoutIcon sx={{ fontSize: 60, color: 'primary.main', mb: 2 }} />
          <Typography variant="h5" component="h2" gutterBottom>
            Logging Out
          </Typography>
          <Typography color="textSecondary" paragraph>
            You are being logged out. Redirecting in 3 seconds...
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', mt: 3 }}>
            <Button
              variant="outlined"
              color="primary"
              onClick={handleCancel}
            >
              Stay Logged In
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={handleLogout}
            >
              Logout Now
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}

export default Logout;
