import React, { useState, useEffect } from 'react';
import {
  Box,
  Drawer,
  Toolbar,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
  Typography,
  Avatar,
  IconButton,
  Tooltip,
} from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import PeopleIcon from '@mui/icons-material/People';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import HelpIcon from '@mui/icons-material/Help';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { useNavigate, useLocation } from 'react-router-dom';

const expandedWidth = 240;
const collapsedWidth = 80;

const menuItems = [
  { label: 'Dashboard', icon: DashboardIcon, id: 'dashboard', path: '/dashboard' },
  { label: 'Analytics', icon: AnalyticsIcon, id: 'analytics', path: '/analytics' },
  { label: 'Users', icon: PeopleIcon, id: 'users', path: '/users' },
];

const settingsItems = [
  { label: 'Profile', icon: AccountCircleIcon, id: 'profile', path: '/profile' },
  { label: 'Settings', icon: SettingsIcon, id: 'settings', path: '/settings' },
  { label: 'Help', icon: HelpIcon, id: 'help', path: '/help' },
  { label: 'Logout', icon: LogoutIcon, id: 'logout', path: '/logout' },
];

function Sidebar({ mobileOpen, onClose }) {
  const [activeItem, setActiveItem] = useState('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Update active item based on current location
    const currentPath = location.pathname;
    const activeMenu = [...menuItems, ...settingsItems].find(item => item.path === currentPath);
    if (activeMenu) {
      setActiveItem(activeMenu.id);
    }
  }, [location.pathname]);

  const handleItemClick = (item) => {
    setActiveItem(item.id);
    navigate(item.path);
    if (mobileOpen) {
      onClose();
    }
  };

  const handleToggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const renderMenuGroup = (items, title) => (
    <Box>
      {title && sidebarOpen && (
        <Typography
          variant="caption"
          sx={{
            px: 2,
            py: 1,
            fontWeight: 600,
            color: 'text.secondary',
            textTransform: 'uppercase',
            letterSpacing: 1,
            display: 'block',
            mt: 2,
            mb: 1,
          }}
        >
          {title}
        </Typography>
      )}
      <List>
        {items.map((item) => {
          const Icon = item.icon;
          const isActive = activeItem === item.id;

          return (
            <ListItem key={item.id} disablePadding>
              <Tooltip title={!sidebarOpen ? item.label : ''} placement="right">
                <ListItemButton
                  onClick={() => handleItemClick(item)}
                  sx={{
                    backgroundColor: isActive ? 'action.selected' : 'transparent',
                    color: isActive ? 'primary.main' : 'text.primary',
                    '&:hover': {
                      backgroundColor: 'action.hover',
                    },
                    borderLeft: isActive ? '4px solid' : '4px solid transparent',
                    borderLeftColor: isActive ? 'primary.main' : 'transparent',
                    transition: 'all 0.3s ease',
                    justifyContent: sidebarOpen ? 'flex-start' : 'center',
                  }}
                >
                  <ListItemIcon
                    sx={{
                      color: isActive ? 'primary.main' : 'inherit',
                      minWidth: sidebarOpen ? 40 : 'auto',
                      justifyContent: 'center',
                    }}
                  >
                    <Icon />
                  </ListItemIcon>
                  {sidebarOpen && (
                    <ListItemText
                      primary={item.label}
                      sx={{
                        '& .MuiTypography-root': {
                          fontWeight: isActive ? 600 : 400,
                        },
                      }}
                    />
                  )}
                </ListItemButton>
              </Tooltip>
            </ListItem>
          );
        })}
      </List>
    </Box>
  );

  const drawerContent = (
    <Box sx={{ overflow: 'auto', display: 'flex', flexDirection: 'column', height: '100%' }}>
      <Toolbar sx={{ justifyContent: sidebarOpen ? 'space-between' : 'center' }}>
        {sidebarOpen && (
          <Typography variant="h6" noWrap sx={{ fontWeight: 700 }}>
            DashUI
          </Typography>
        )}
        <Tooltip title={sidebarOpen ? 'Collapse' : 'Expand'} placement="right">
          <IconButton
            onClick={handleToggleSidebar}
            size="small"
            sx={{
              color: 'primary.main',
            }}
          >
            {sidebarOpen ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </Tooltip>
      </Toolbar>

      {/* User Profile Section */}
      {sidebarOpen && (
        <Box
          sx={{
            p: 2,
            display: 'flex',
            alignItems: 'center',
            gap: 2,
            borderBottom: '1px solid',
            borderColor: 'divider',
          }}
        >
          <Avatar
            sx={{
              width: 40,
              height: 40,
              bgcolor: 'primary.main',
              flexShrink: 0,
            }}
          >
            JD
          </Avatar>
          <Box sx={{ flex: 1, minWidth: 0 }}>
            <Typography variant="body2" fontWeight={600} noWrap>
              John Doe
            </Typography>
            <Typography variant="caption" color="textSecondary" noWrap>
              Admin
            </Typography>
          </Box>
        </Box>
      )}

      {/* Main Menu */}
      <Box sx={{ flex: 1 }}>
        {renderMenuGroup(menuItems, 'Main')}

        {sidebarOpen && <Divider sx={{ my: 1 }} />}

        {/* Settings Menu */}
        {renderMenuGroup(settingsItems, 'Settings')}
      </Box>
    </Box>
  );

  return (
    <Box
      component="nav"
      sx={{
        width: { sm: sidebarOpen ? expandedWidth : collapsedWidth },
        flexShrink: { sm: 0 },
        transition: 'width 0.3s ease',
      }}
    >
      {/* Mobile Drawer */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={onClose}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: expandedWidth,
          },
        }}
      >
        {drawerContent}
      </Drawer>

      {/* Desktop Drawer */}
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: 'none', sm: 'block' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: sidebarOpen ? expandedWidth : collapsedWidth,
            backgroundColor: '#fafafa',
            transition: 'width 0.3s ease',
            overflowX: 'hidden',
          },
        }}
        open
      >
        {drawerContent}
      </Drawer>
    </Box>
  );
}

export default Sidebar;
