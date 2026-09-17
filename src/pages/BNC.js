import React, { useState, useEffect } from 'react';
import  { Container ,Card, Button} from '@mui/material';

function BNC() {  
  return ( 
    <Container sx={{ display: 'flex', gap:2, alignItems: 'center', justifyContent: 'center', minHeight: '100vh' }}>
        <Card sx={{ p: 4, mt: 4, padding:10, textAlign: 'center' }}>
            <Button variant="contained" color="primary" sx={{ mt: 2 }} onClick={() => console.log('Get Data button clicked')}>
             Get Data
            </Button>
        </Card>
         <Card sx={{ p: 4, mt: 4, padding:10, textAlign: 'center' }}>
            <Button variant="contained" color="primary" sx={{ mt: 2 }} onClick={() => console.log('Get Data button clicked')}>
             Get Data
            </Button>
        </Card>
         <Button variant="contained" color="primary" sx={{ mt: 2 }} onClick={() => console.log('Get Data button clicked')}>
             Get Data
            </Button>
    </Container>
    );
  }


export default BNC;