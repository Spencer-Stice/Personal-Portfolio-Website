import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import React, { Component } from 'react';
import '../styles/home.css';
import {Helmet} from 'react-helmet';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { green, purple } from '@mui/material/colors';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Link } from 'react-router-dom';


const theme = createTheme({
    palette: {
      primary: {
        main: "#f56702",
      },
    },
  });

class Home extends Component {
  render() {
    return (
    <div>
        <ThemeProvider theme={theme}>
        <Helmet>
            <style>{'body { background-color: black; }'}</style>
        </Helmet>
        <div class="welcome-div">
            <div class="left-welcome">
                <p class="hello-text">Hi, I'm Spencer Stice</p>
                <p class="study-text">I study computer engineering and math at UCLA</p>
                <ButtonGroup variant="contained" aria-label="outlined primary button group" size="large" fullWidth="true">
                    <Button href="/#/projects">Projects</Button>
                    <Button href="/#/experience">Work Experience</Button>
                    <Button href="/#/classes">Classes</Button>
                    <Button href="/#/contact">Contact</Button>
                </ButtonGroup>
            </div>
            <div class="right-welcome">
                <img src={require("../static/images/Senior Photo_Square.jpg")} alt="Spencer" class="spencerimage"/>
            </div>
        </div>
        </ThemeProvider>
    </div>
    );
  }
}

export default Home;
