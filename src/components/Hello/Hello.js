import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import './Hello.css';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(4),
  textAlign: 'left',
  color: theme.palette.text.secondary,
}));

export default function Hello() {
  return (
    <div className='container'>
     <Stack
        direction={{ xs: 'column', sm: 'row' }}
        justifyContent="flex-start"
        alignItems="left"
        spacing={8}
      >
        <Item className='stack-item' >
        <div >
            <p className='hello-p'>Hello, I am</p>
            <p className='hello-name'>&lt; Vipul</p>
            <p className='hello-name hello-surname'>Malhotra / &gt; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
            <p className='hello-stack'>Azure Cloud Developer</p>
            <p className='hello-stack'>Fullstack Developer</p>
            <p className='hello-stack'>React Native Developer</p>
        </div>
        </Item>
        <Item className='stack-item'>
        <div >
            <img src='https://media.licdn.com/dms/image/C4D03AQEyUCzU1GTYkg/profile-displayphoto-shrink_800_800/0/1648457056150?e=1685577600&v=beta&t=sP6OK4LOOv0uLz_NzWeKed5vqQEElspwL7vM4TwDSLA' alt='Profile Pic' className='profile-pic'/>
            <div>
              <span className='yr-count'>10</span>
              <span className='yr-text'>YEARS OF EXPERIENCE</span>
            </div>
            </div>
        </Item>

      </Stack>


    </div>

  );
}