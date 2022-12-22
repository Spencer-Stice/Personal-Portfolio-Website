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

class Contact extends Component {
  render() {
    return (
    <div>
        <ThemeProvider theme={theme}>
        <Helmet>
            <style>{'body { background-color: black; }'}</style>
        </Helmet>
        <div class="logo-top-div">
            <img src={require("../static/images/intel_logo.jpg")} alt="DAV" class="intel-image"></img>
        </div>
        <div class="experience-grid-div">
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={6}>
                    <a href="https://www.linkedin.com/in/spencer-stice/details/experience/" class="experience-link">
                    <Item>
                        <div class="exp-box-div">
                            <h3 class="exp-box-title">
                                Software Development Engineer Intern
                            </h3>
                            <p class="exp-text">
                                Within the Datacenter and Artificial Intelligence sector, began overhauling 
                                the MIO team's outdated database website to use ReactJS, FastAPI in Python, 
                                and SQL enabling the potential for AI-driven insights in the future
                            </p>
                        </div>
                    </Item>
                    </a>
                </Grid>
                <Grid item xs={6}>
                <a href="https://www.linkedin.com/in/spencer-stice/details/experience/" class="experience-link">
                    <Item>
                        <div class="exp-box-div">
                            <h3 class="exp-box-title">
                                DDR5 Memory Validation Engineer Intern
                            </h3>
                            <p class="exp-text">
                                Worked on the Datacenter and Artificial Intelligence team to perform 
                                post-silicon validation of novel DDR5 DRAM for use in servers
                            </p>
                        </div>
                    </Item>
                    </a>
                </Grid>
            </Grid>
            <div class="bottom-text-div">
                <p class="bottom-text">
                    Both positions for Intel
                </p>
            </div>
        </div>
        </ThemeProvider>
    </div>
    );
  }
}

export default Contact;
