import React from 'react';
import { Typography, Card, CardContent, Box, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import WarningIcon from '@mui/icons-material/Warning';
import Widget from '../components/Widget';

function Dashboard() {
  const navigate = useNavigate();

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
      <Typography variant="h4" component="h1" gutterBottom sx={{ mb: 4, textAlign: 'left' }}>
        Dashboard
      </Typography>

      <Grid container spacing={3}>
        {/* Stats Card 1 */}
        <Grid item xs={12} sm={6} md={3}>
          <Widget
            title="Total Users"
            value="12,345"
            icon={<TrendingUpIcon sx={{ fontSize: 40, color: 'primary.main' }} />}
            onClick={() => console.log('Total Users clicked')}
          />
        </Grid>

        {/* Stats Card 2 */}
        <Grid item xs={12} sm={6} md={3}>
          <Widget
            title="Active Sessions"
            value="1,234"
            icon={<CheckCircleIcon sx={{ fontSize: 40, color: 'success.main' }} />}
            onClick={() => navigate('/analytics')}
          />
        </Grid>

        {/* Stats Card 3 */}
        <Grid item xs={12} sm={6} md={3}>
          <Widget
            title="Checking"
            value="567"
            icon={<WarningIcon sx={{ fontSize: 40, color: 'warning.main' }} />}
            onClick={() => navigate('/profile')}
          />
        </Grid>

        {/* Stats Card 4 */}
        <Grid item xs={12} sm={6} md={3}>
          <Widget
            title="Revenue"
            value="$123,456"
            icon={<TrendingUpIcon sx={{ fontSize: 40, color: 'primary.main' }} />}
            onClick={() => navigate('/analytics')}
          />
        </Grid>

        {/* Large Content Card */}
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h6" component="h2" gutterBottom>
                Welcome to Your Dashboard
              </Typography>
              <Typography color="textSecondary" paragraph>
                Your dashboard is ready to display real-time data, charts, tables, and more. Use the sidebar to navigate to different sections.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Dashboard;
