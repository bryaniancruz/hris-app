import React from 'react';
import { Typography, Card, CardContent, Box, Grid, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import HelpIcon from '@mui/icons-material/Help';

function Help() {
  const faqs = [
    {
      question: 'How do I navigate the dashboard?',
      answer: 'Use the sidebar menu on the left to navigate between different sections. Click on Dashboard, Analytics, Users, or Profile to view different pages.',
    },
    {
      question: 'How can I collapse the sidebar?',
      answer: 'Click the chevron icon in the sidebar header to toggle between expanded and collapsed view.',
    },
    {
      question: 'How do I edit my profile?',
      answer: 'Navigate to Profile from the sidebar menu and fill in the edit form with your new information.',
    },
    {
      question: 'Where can I change my settings?',
      answer: 'Go to Settings in the sidebar to configure notifications, appearance, and security settings.',
    },
    {
      question: 'How do I log out?',
      answer: 'Click on Logout in the sidebar menu to end your session.',
    },
  ];

  return (
    <Box>
      <Typography variant="h4" component="h1" gutterBottom sx={{ mb: 4 }}>
        Help & Support
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                <HelpIcon color="primary" sx={{ fontSize: 32 }} />
                <Typography variant="h6" component="h2">
                  Frequently Asked Questions
                </Typography>
              </Box>
              <Box sx={{ mt: 2 }}>
                {faqs.map((faq, index) => (
                  <Accordion key={index}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                      <Typography variant="body1" sx={{ fontWeight: 500 }}>
                        {faq.question}
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography color="textSecondary">
                        {faq.answer}
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                ))}
              </Box>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h6" component="h2" gutterBottom>
                Contact Support
              </Typography>
              <Typography color="textSecondary" paragraph>
                If you need additional help, you can reach out to our support team:
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                <Typography variant="body2">
                  📧 Email: support@example.com
                </Typography>
                <Typography variant="body2">
                  💬 Live Chat: Available Mon-Fri, 9AM-5PM EST
                </Typography>
                <Typography variant="body2">
                  📱 Phone: 1-800-SUPPORT
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Help;
