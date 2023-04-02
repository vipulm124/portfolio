import React from "react";
import './Skills.css';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import { Tooltip } from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(4),
    textAlign: 'left',
    color: theme.palette.text.secondary,
  }));

function Skills(){

    return(
        <div className="skills-container">
             <span className="heading" marginTop={12}>skills()</span>
             <Stack
        direction={{ xs: 'column', sm: 'row' }}
        justifyContent="flex-start"
        alignItems="left"
        spacing={8}
        marginTop={8}
        sx={{ flexWrap: 'wrap', gap: 1 }}
      >
        <Item className='stack-item'>
            <div>
                <Tooltip title=".NET CORE">
                <img src={require('../../assets/images/netcore.png')} className='skill-images'/>
                </Tooltip>
            </div>
        </Item>
        <Item className='stack-item' >
            <div>
                <Tooltip title="C#">
                <img src={require('../../assets/images/csharp.png')} className='skill-images'/>
                </Tooltip>
            </div>
        </Item>
        <Item className='stack-item' >
            <div>
            <Tooltip title="Azure">
                <img src={require('../../assets/images/azure.png')} className='skill-images'/>
            </Tooltip>    
            </div>
        </Item>
        <Item className='stack-item' >
            <div>
            <Tooltip title="Databricks">
                <img src={require('../../assets/images/databricks.png')} className='skill-images'/>
            </Tooltip>
            </div>
        </Item>
        <Item className='stack-item' >
            <div>
            <Tooltip title="PySpark">
                <img src={require('../../assets/images/pyspark.png')} className='skill-images'/>
            </Tooltip> 
            </div>
        </Item>
        <Item className='stack-item' >
            <div>
            <Tooltip title="React">
                <img src={require('../../assets/images/react.png')} className='skill-images'/>
            </Tooltip>
            </div>
        </Item>
        <Item className='stack-item' >
            <div>
            <Tooltip title="React Native">
                <img src={require('../../assets/images/reactnative.webp')} className='skill-images'/>
            </Tooltip>
            </div>
        </Item>
        <Item className='stack-item' >
            <div>
            <Tooltip title="Python">
                <img src={require('../../assets/images/python.png')} className='skill-images'/>
            </Tooltip>
            </div>
        </Item>
      </Stack>
        </div>
    )
}

export default Skills;