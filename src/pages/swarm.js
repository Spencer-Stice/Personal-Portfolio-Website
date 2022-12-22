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
import '../styles/swarm.css';

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

class SWARM extends Component {
  render() {
    return (
    <div class="swarm-main">
        <ThemeProvider theme={theme}>
        <Helmet>
            <style>{'body { background-color: black; }'}</style>
        </Helmet>
        <div class="project-container">
            <div class="swarm-container">
            <img src={require("../static/images/intel_logo.jpg")} alt="swarm" class="swarm-image"></img>
            </div>
            <div class="swarm-text-div">
                <h4 class="text-header">
                    Purpose
                </h4>
                <p class="swarm-text">
                    A artificial intelligence program for validating novel DDR5 DRAM at Intel
                    that reduced testing times by almost 80% and provided superior results as 
                    compared to previous testing methodologies. I submitted an invention disclosure from
                    for this project.
                </p>
                <h4 class="text-header">
                    Implementation
                </h4>
                <p class="swarm-text">
                    This program was written in Python 3 without the use of AI/ML libraries. It is essentially
                    a constrained optimization algorithm based on the artificial bee colony algorithm previously
                    published with modifications that make it more suitable for validating DDR5 DRAM. The goal of
                    the program is to determine the combination of three integers which yields the most promising
                    results with the given DRAM DIMM. Previous methodologies tested a small set of the possible 
                    combinations without adjusting the integers based on previous results while my program intelligently
                    adjusts the integers based on the previous test results.<br></br><br></br>I designed over 13,000
                    tests to determine the value of this program, which yielded promising results.
                    <br></br><br></br>The details of this project are confidential, so no GitHub link is provided.
                </p>
            </div>
        </div>
        </ThemeProvider>
    </div>
    );
  }
}

export default SWARM;
