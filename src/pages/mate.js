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
import '../styles/mate.css';

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

class Mate extends Component {
  render() {
    return (
    <div class="mate-main">
        <ThemeProvider theme={theme}>
        <Helmet>
            <style>{'body { background-color: black; }'}</style>
        </Helmet>
        <div class="project-container">
            <div class="mate-video">
                <img src={require("../static/images/mate.jpg")} alt="mate" class="mate-image-real"></img>
            </div>
            <div class="mate-text-div">
                <h4 class="text-header">
                    Purpose
                </h4>
                <p class="mate-text">
                    Hardware that the user can attach to their waterbottle and corresponding software which is used
                    to track the amount of water remaining in the bottle throughout the day. The software app provides
                    the user with relevant reminders about drinking water and data about their consumption over time.
                </p>
                <h4 class="text-header">
                    Implementation
                </h4>
                <p class="mate-text">
                    The hardware side of the project includes an ESP-32 MCU attached to an ultrasonic sensor,
                    which performs the actual water level measurement. The MCU is attached above the lid of the
                    bottle and connected to the sensor inside the cap, facing down towards the water. The MCU is connected
                    via Bluetooth to the application running on the laptop where the user can view relevant data
                    and reminders about drinking the water. The app was built using the Processing IDE (as we had limited
                    time to complete the project as it was part of a hackathon).
                    <br></br><br></br>You can access the github repo for this project:
                    <a href="https://github.com/Spencer-Stice/Hydr8Mate" class="github-link"> HERE</a>.
                </p>
            </div>
        </div>
        </ThemeProvider>
    </div>
    );
  }
}

export default Mate;
