import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import React, { Component } from 'react';
import '../styles/home.css';
import '../styles/experience.css';
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
import '../styles/contact.css';

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

class Experience extends Component {
  render() {
    return (
    <div>
        <ThemeProvider theme={theme}>
        <Helmet>
            <style>{'body { background-color: black; }'}</style>
        </Helmet>
        <div class="main-div">
            <div class="text-div">
                <h3 class="content-text">
                    smstice@ucla.edu
                </h3>
            </div>
            <div class="text-div">
                <h3>
                    <a class="content-text-2" href="https://www.linkedin.com/in/spencer-stice/">LinkedIn</a>
                </h3>
            </div>
            <div class="text-div">
                <h3>
                    <a class="content-text-2" href="https://github.com/Spencer-Stice">GitHub</a>
                </h3>
            </div>
        </div>
        </ThemeProvider>
    </div>
    );
  }
}

export default Experience;
