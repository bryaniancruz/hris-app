import React, { useState } from 'react';
import { Typography, Card, CardContent, Box, Grid, Button, FormControlLabel, Switch, Divider } from '@mui/material';

function Settings() {
  const [settings, setSettings] = useState({
    emailNotifications: true,
    pushNotifications: false,
    darkMode: false,
    twoFactor: true,
  });

  const handleToggle = (setting) => {
    setSettings({
      ...settings,
      [setting]: !settings[setting],
    });
  };

  return (
    <Box>
      <Typography variant="h4" component="h1" gutterBottom sx={{ mb: 4 }}>
        Settings
      </Typography>

      <Grid container spacing={3}>
        {/* Notifications Settings */}
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h6" component="h2" gutterBottom>
                Notifications
              </Typography>
              <Divider sx={{ my: 2 }} />
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <FormControlLabel
                  control={
                    <Switch
                      checked={settings.emailNotifications}
                      onChange={() => handleToggle('emailNotifications')}
                    />
                  }
                  label="Email Notifications"
                />
                <FormControlLabel
                  control={
                    <Switch
                      checked={settings.pushNotifications}
                      onChange={() => handleToggle('pushNotifications')}
                    />
                  }
                  label="Push Notifications"
                />
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* Appearance Settings */}
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h6" component="h2" gutterBottom>
                Appearance
              </Typography>
              <Divider sx={{ my: 2 }} />
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <FormControlLabel
                  control={
                    <Switch
                      checked={settings.darkMode}
                      onChange={() => handleToggle('darkMode')}
                    />
                  }
                  label="Dark Mode"
                />
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* Security Settings */}
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h6" component="h2" gutterBottom>
                Security
              </Typography>
              <Divider sx={{ my: 2 }} />
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <FormControlLabel
                  control={
                    <Switch
                      checked={settings.twoFactor}
                      onChange={() => handleToggle('twoFactor')}
                    />
                  }
                  label="Two-Factor Authentication"
                />
                <Button variant="outlined" color="error">
                  Change Password
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* Save Button */}
        <Grid item xs={12}>
          <Button variant="contained" color="primary">
            Save All Settings
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Settings;
