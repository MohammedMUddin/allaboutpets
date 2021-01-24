import React from 'react'
import {Typography, Card, CardContent, Grid, CardActions, IconButton} from '@material-ui/core'
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import PortraitIcon from "@material-ui/icons/Portrait";
import logo from './../logo.svg';
import './../App.css';

export default function About(){

    const contentstyle = {
        minWidth: 310,
        maxWidth: 345, 
      };

    return (    
        <Grid container direction ="column" alignItems="center" spacing={3}>
            <Grid item xs={2}></Grid>
            <img src={logo} className="App-logo" alt="logo" />
            <Grid item xs={10}>
                <Card style={contentstyle}> 
                    <CardContent height="100%" style={{backgroundColor: "#cae4db"}}>
                        <Typography variant="h6" style={{"fontWeight": "bold"}}>
                            Hi everyone! My name is Mohammed and I am a
                            Computer Science student at Cleveland State and 
                            this is my first attempt at a react webapp. 
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <IconButton href="https://www.linkedin.com/in/mohammed-uddin-2a3854181/">
                            <LinkedInIcon/>
                        </IconButton>
                        <IconButton  href="https://github.com/MohammedMUddin">
                            <GitHubIcon/>
                        </IconButton>
                        <IconButton  href="https://mohammedmuddin.github.io/">
                            <PortraitIcon/>
                        </IconButton>
                    </CardActions>
                </Card>
            </Grid>
        </Grid>
    )
}