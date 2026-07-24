import React from 'react';
import { Box, Card, CardContent, Typography } from '@mui/material';

const Widget = ({ title, value, icon, onClick }) => {
  return (
    <Box>
      <Card
        onClick={onClick}
        sx={{
          p: 2,
          position: 'relative',
          boxShadow: 3,
          borderRadius: 2,
          minWidth: 300,
          cursor: onClick ? 'pointer' : 'default',
          transition: 'transform 0.2s ease, box-shadow 0.2s ease, background-color 0.2s ease',
          '&:hover': {
            transform: 'translateY(-2px)',
            boxShadow: 6,
            // backgroundColor: 'action.hover',
          },
        }}
      >
        <CardContent sx={{ position: 'relative', pt: 2, pb: 2 }}>
          <Box sx={{ position: 'absolute', top: { md: 10, xs: 8, lg: 12 }, right: { md: 15, xs: 10, lg: 20 } }}>
            {icon}
          </Box>
          <Typography color="textSecondary" gutterBottom>
            {title}
          </Typography>
          <Typography variant="h3" sx={{ mt: 2 }}>
            {value}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Widget;




