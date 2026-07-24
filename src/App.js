import React, { useState } from 'react';
import {
  AppBar,
  Box,
  CssBaseline,
  IconButton,
  Toolbar,
  Typography,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './Sidebar';
import Dashboard from './pages/Dashboard';
import Analytics from './pages/Analytics';
import Users from './pages/Users';
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import Help from './pages/Help';
import Logout from './pages/Logout';
import Login from './pages/Login';
import './App.css';

function App() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(() => localStorage.getItem('hrisLoggedIn') === 'true');

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleLogin = () => {
    localStorage.setItem('hrisLoggedIn', 'true');
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    localStorage.removeItem('hrisLoggedIn');
    setIsLoggedIn(false);
  };

  const RequireAuth = ({ children }) => {
    return isLoggedIn ? children : <Navigate to="/login" replace />;
  };

  return (
    <Router basename="/hris-app">
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        {isLoggedIn && (
          <AppBar
            position="fixed"
            sx={{
              width: '100%',
            }}
          >
            <Toolbar>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ mr: 2, display: { sm: 'none' } }}
              >
                <MenuIcon />
              </IconButton>
            </Toolbar>
          </AppBar>
        )}

        {isLoggedIn && <Sidebar mobileOpen={mobileOpen} onClose={handleDrawerToggle} />}

        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: isLoggedIn ? 3 : 0,
            width: '100%',
            transition: 'width 0.3s ease',
          }}
        >
          {isLoggedIn && <Toolbar />}
          <Box sx={{ width: '100%', maxWidth: '100%', mx: 0, px: { xs: 1, sm: 2 } }}>
            <Routes>
              <Route
                path="/"
                element={isLoggedIn ? <Navigate to="/dashboard" replace /> : <Login onLogin={handleLogin} />}
              />
              <Route
                path="/login"
                element={isLoggedIn ? <Navigate to="/dashboard" replace /> : <Login onLogin={handleLogin} />}
              />
              <Route path="/dashboard" element={<RequireAuth><Dashboard /></RequireAuth>} />
              <Route path="/analytics" element={<RequireAuth><Analytics /></RequireAuth>} />
              <Route path="/users" element={<RequireAuth><Users /></RequireAuth>} />
              <Route path="/profile" element={<RequireAuth><Profile /></RequireAuth>} />
              <Route path="/settings" element={<RequireAuth><Settings /></RequireAuth>} />
              <Route path="/help" element={<RequireAuth><Help /></RequireAuth>} />
              <Route path="/logout" element={<RequireAuth><Logout onLogout={handleLogout} /></RequireAuth>} />
            </Routes>
          </Box>
        </Box>
      </Box>
    </Router>
  );
}

export default App;
