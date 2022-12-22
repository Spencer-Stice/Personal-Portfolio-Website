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

class Projects extends Component {
  render() {
    return (
    <div>
        <ThemeProvider theme={theme}>
        <Helmet>
            <style>{'body { background-color: black; }'}</style>
        </Helmet>
        <div class="projects-grid-div">
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={6}>
                    <a href="/swarm" class="projects-link">
                    <Item>
                        <div class="box-div">
                            <h3 class="box-title">
                                SWARM
                            </h3>
                            <img src={require("../static/images/intel_logo.jpg")} alt="DAV" class="dav-image"></img>
                        </div>
                    </Item>
                    </a>
                </Grid>
                <Grid item xs={6}>
                <a href="/dav" class="projects-link">
                    <Item>
                        <div class="box-div">
                            <h3 class="box-title">
                                Digital Audio Visualizer
                            </h3>
                            <img src={require("../static/images/dav.jpg")} alt="DAV" class="dav-image"></img>
                        </div>
                    </Item>
                    </a>
                </Grid>
                <Grid item xs={6}>
                <a href="/fit" class="projects-link">
                    <Item>
                        <div class="box-div">
                            <h3 class="box-title">
                                FitTracker
                            </h3>
                            <img src={require("../static/images/fittracker_logo.jpg")} alt="DAV" class="dav-image"></img>
                        </div>
                    </Item>
                    </a>
                </Grid>
                <Grid item xs={6}>
                    <a href="/mate" class="projects-link">
                    <Item>
                        <div class="box-div">
                            <h3 class="box-title">
                                Hydr8Mate
                            </h3>
                            <img src={require("../static/images/hydr8mate.jpg")} alt="DAV" class="dav-image"></img>
                        </div>
                    </Item>
                    </a>
                </Grid>
                <Grid item xs={6}>
                <a href="/ghost" class="projects-link">
                    <Item>
                        <div class="box-div">
                            <h3 class="box-title">
                                Ghost Racer Game
                            </h3>
                            <img src={require("../static/images/ghostracer.jpg")} alt="DAV" class="dav-image"></img>
                        </div>
                    </Item>
                    </a>
                </Grid>
                <Grid item xs={6}>
                <a href="/car" class="projects-link">
                    <Item>
                        <div class="box-div">
                            <h3 class="box-title">
                                Electric Car
                            </h3>
                            <img src={require("../static/images/opscar.jpg")} alt="DAV" class="dav-image"></img>
                        </div>
                    </Item>
                    </a>
                </Grid>
            </Grid>
        </div>
        </ThemeProvider>
    </div>
    );
  }
}

export default Projects;
