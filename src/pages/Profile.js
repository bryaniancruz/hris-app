import React from 'react';
import { Typography, Card, CardContent, Box, Grid, Button, TextField } from '@mui/material';
import Avatar from '@mui/material/Avatar';

function Profile() {
  return (
    <Box>
      <Typography variant="h4" component="h1" gutterBottom sx={{ mb: 4 }}>
        Profile
      </Typography>

      <Grid container spacing={3}>
        {/* Profile Card */}
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent sx={{ textAlign: 'center' }}>
              <Avatar
                sx={{
                  width: 100,
                  height: 100,
                  bgcolor: 'primary.main',
                  margin: '0 auto 16px',
                  fontSize: '2rem',
                }}
              >
                JD
              </Avatar>
              <Typography variant="h6" component="h2" gutterBottom>
                John Doe
              </Typography>
              <Typography color="textSecondary" gutterBottom>
                Administrator
              </Typography>
              <Typography variant="body2" color="textSecondary">
                john.doe@example.com
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Edit Profile Form */}
        <Grid item xs={12} md={8}>
          <Card>
            <CardContent>
              <Typography variant="h6" component="h2" gutterBottom>
                Edit Profile
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 2 }}>
                <TextField
                  label="Full Name"
                  defaultValue="John Doe"
                  fullWidth
                  variant="outlined"
                />
                <TextField
                  label="Email"
                  defaultValue="john.doe@example.com"
                  fullWidth
                  variant="outlined"
                />
                <TextField
                  label="Phone"
                  defaultValue="+1 (555) 123-4567"
                  fullWidth
                  variant="outlined"
                />
                <TextField
                  label="Bio"
                  defaultValue="Software Developer and Administrator"
                  fullWidth
                  variant="outlined"
                  multiline
                  rows={4}
                />
                <Box sx={{ display: 'flex', gap: 2 }}>
                  <Button variant="contained" color="primary">
                    Save Changes
                  </Button>
                  <Button variant="outlined" color="secondary">
                    Cancel
                  </Button>
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Profile;
