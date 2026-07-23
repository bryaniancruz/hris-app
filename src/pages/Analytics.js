import React from 'react';
import { Typography, Card, CardContent, Box, Grid } from '@mui/material';

function Analytics() {
  return (
    <Box>
      <Typography variant="h4" component="h1" gutterBottom sx={{ mb: 4 }}>
        Analytics
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h6" component="h2" gutterBottom>
                Traffic Overview
              </Typography>
              <Typography color="textSecondary" paragraph>
                This is the Analytics page. Here you can display charts, graphs, and detailed analytics data for your application.
              </Typography>
              <Box sx={{ mt: 3, p: 2, backgroundColor: '#f5f5f5', borderRadius: 1 }}>
                <Typography variant="body2" color="textSecondary">
                  📊 Chart placeholder - Add your charts and analytics components here
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Page Views
              </Typography>
              <Typography variant="h3" sx={{ mt: 2, mb: 1 }}>
                45.2K
              </Typography>
              <Typography variant="body2" color="textSecondary">
                +12% from last week
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Conversion Rate
              </Typography>
              <Typography variant="h3" sx={{ mt: 2, mb: 1 }}>
                3.8%
              </Typography>
              <Typography variant="body2" color="textSecondary">
                +0.5% from last week
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Analytics;
