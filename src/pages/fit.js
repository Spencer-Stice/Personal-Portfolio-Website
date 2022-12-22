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
import '../styles/fit.css';

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

class FIT extends Component {
  render() {
    return (
    <div class="fit-main">
        <ThemeProvider theme={theme}>
        <Helmet>
            <style>{'body { background-color: black; }'}</style>
        </Helmet>
        <div class="project-container">
            <div class="fit-video">
                <img src={require("../static/images/fittracker.jpg")} alt="fit" class="fit-image-real"></img>
            </div>
            <div class="fit-text-div">
                <h4 class="text-header">
                    Purpose
                </h4>
                <p class="fit-text">
                    A fitness web application with features that include creating workouts, tracking progress
                    over time, editing workouts, and viewing workout history. Users are able to log in and out
                    of their account
                </p>
                <h4 class="text-header">
                    Implementation
                </h4>
                <p class="fit-text">
                    This project uses ReactJS as the front end and Google Firebase as the backend database
                    which stores the user's workouts. As part of the development team, I worked primary on the
                    workout history page where users are able to view and load their previous workouts. I implemented
                    this feature using ReactJS and HTTP requests to the backend for the specific user.
                    <br></br><br></br>You can access the github repo for this project:
                    <a href="https://github.com/Spencer-Stice/35Lfitttracker" class="github-link"> HERE</a>.
                </p>
            </div>
        </div>
        </ThemeProvider>
    </div>
    );
  }
}

export default FIT;
