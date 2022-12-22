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
import '../styles/dav.css';

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

class DAV extends Component {
  render() {
    return (
    <div class="dav-main">
        <ThemeProvider theme={theme}>
        <Helmet>
            <style>{'body { background-color: black; }'}</style>
        </Helmet>
        <div class="project-container">
            <div class="dav-video">
                <img src={require("../static/images/dav.jpg")} alt="DAV" class="dav-image-real"></img>
            </div>
            <div class="dav-text-div">
                <h4 class="text-header">
                    Purpose
                </h4>
                <p class="dav-text">
                    &nbsp;A device that displays the frequencies in sound in a fun, visual way using a digital
                    microphone, FFT, VGA display, and Intel FPGA board.
                </p>
                <h4 class="text-header">
                    Implementation
                </h4>
                <p class="dav-text">
                    A modular implementation was used for this project. The top module serves as a black box for the
                    entire project and encapsulates all other modules. Within this module, there are separate modules for
                    a clock divider, VGA dispay, data converter, digital mic translator, and FFT calculator. Each of these
                    modules was written separately and then connected together in the top module to construct the final
                    project.<br></br><br></br>Additionally, while working towards this project, my team also created sub-projects
                    to learn how to implement the final project. For example, we created a flappy-bird like game using
                    just the FPGA board and VGA display. This sub-project was also constructed using a modular design.
                    <br></br><br></br>You can access the github repo for this project:
                    <a href="https://github.com/Spencer-Stice/Digital-Audio-Visualizer" class="github-link"> HERE</a>.
                </p>
                <div class="bird-video-div">
                    <iframe src="https://www.youtube.com/embed/YDqHrvdhuY4" class="bird-video"></iframe>
                </div>
            </div>
        </div>
        </ThemeProvider>
    </div>
    );
  }
}

export default DAV;
