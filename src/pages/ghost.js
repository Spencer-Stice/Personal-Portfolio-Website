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
import '../styles/ghost.css';

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

class Ghost extends Component {
  render() {
    return (
    <div class="ghost-main">
        <ThemeProvider theme={theme}>
        <Helmet>
            <style>{'body { background-color: black; }'}</style>
        </Helmet>
        <div class="project-container">
            <div class="ghost-video">
                <img src={require("../static/images/ghostracer.jpg")} alt="ghost" class="ghost-image-real"></img>
            </div>
            <div class="ghost-text-div">
                <h4 class="text-header">
                    Purpose
                </h4>
                <p class="ghost-text">
                    Video game created for a computer science class. The player controls a car that attempts
                    to drive and avoid zombies while collecting souls. There are other obstacles, such as oil spills
                    and zombie taxi drivers that try to prevent the player from collecting souls and advancing to the 
                    next level in the game.
                </p>
                <h4 class="text-header">
                    Implementation
                </h4>
                <p class="ghost-text">
                    This game was developed in C++. As it was a class assignment, we were given all of the necessary
                    graphics and we were tasked with programming the logic for the game. I designed classes for each
                    of the main objects in the game and used object-oriented programming techniques such as polymorphism
                    and inheritance to properly implement the logic for the game. I had to determine which functionality would
                    be implemented in which class so that it would result in the most logical, simply defined program. For example,
                    if two objects both had the ability to move, I would have designed them as children of a parent class which
                    implements the moving functionality.
                    <br></br><br></br>You can access the github repo for this project:
                    <a href="https://github.com/Spencer-Stice/UCLA-CS32/tree/main/Projects/Project3/GhostRacer-skeleton-windows/GhostRacer/GhostRacer" class="github-link"> HERE</a>.
                </p>
            </div>
        </div>
        </ThemeProvider>
    </div>
    );
  }
}

export default Ghost;
