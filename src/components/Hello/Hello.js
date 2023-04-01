import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import './Hello.css';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function Hello() {
  return (
    <div className='container'>

    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
       
      <Grid item xs={6} md={6} justifyItems="right" justifyContent='end' justifySelf='right'>
          <div style={{marginLeft:'30%'}}>
            <p className='hello-p'>Hello, I am</p>
            <p className='hello-name'>&lt; Vipul</p>
            <p className='hello-name hello-surname'>Malhotra /&gt;</p>
            <p className='hello-surname'>Azure Cloud Developer</p>
            <p className='hello-surname'>Fullstack Developer</p>
            <p className='hello-surname'>React Native Developer</p>
            


          </div>
          
        </Grid>
        <Grid item xs={6} md={6}>
          <div style={{marginRight:'70%'}}>
            <img src='https://media.licdn.com/dms/image/C4D03AQEyUCzU1GTYkg/profile-displayphoto-shrink_800_800/0/1648457056150?e=1685577600&v=beta&t=sP6OK4LOOv0uLz_NzWeKed5vqQEElspwL7vM4TwDSLA' alt='Profile Pic' className='profile-pic'/>
            <div>
              <span className='yr-count'>10</span>
              <span className='yr-text'>YEARS OF EXPERIENCE</span>
            </div>
          </div>

        </Grid>
      
      </Grid>
    </Box>
    </div>

  );
}