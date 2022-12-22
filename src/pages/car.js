import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import React, { Component } from 'react';
import '../styles/home.css';
import '../styles/projects.css';
import {Helmet} from 'react-helmet';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { green, purple } from '@mui/material/colors';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import '../styles/car.css';

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    background: theme.palette.primary.main,
  }));

const theme = createTheme({
    palette: {
      primary: {
        main: "#f56702",
      },
    },
  });

class Car extends Component {
  render() {
    return (
    <div class="car-main">
        <ThemeProvider theme={theme}>
        <Helmet>
            <style>{'body { background-color: black; }'}</style>
        </Helmet>
        <div class="project-container">
            <div class="car-video">
            <iframe class="car-image-real" width="320" height="569" src="https://www.youtube.com/embed/4617VwiyNT8" title="opscar" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <div class="car-text-div">
                <h4 class="text-header">
                    Purpose
                </h4>
                <p class="car-text">
                    Autonomous electric car designed to follow parallel to a wall and turn with the wall when a corner
                    is reached.
                </p>
                <h4 class="text-header">
                    Implementation
                </h4>
                <p class="car-text">
                    This car was created using an arduino, breadboard, motors, and wheels. The arduino runs a program
                    that implements PID control to ensure the car does not hit the wall or stray too far from the wall.
                    Additionally, further code is used to detect when the end of the wall occurs, at which point the 
                    car turns 90 degrees and continues to follow the wall.
                    <br></br><br></br>You can access the github repo for this project:
                    <a href="https://github.com/Spencer-Stice/UCLA-Open-Project-Space/tree/main/Self_Driving_Car" class="github-link"> HERE</a>.
                </p>
            </div>
        </div>
        </ThemeProvider>
    </div>
    );
  }
}

export default Car;
