import React from 'react'
import {AppBar, Toolbar, Button, Typography} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from "react-router-dom";


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }));


function Navbar() {

    const classes = useStyles();
    const history = useHistory();

    return (
            <div className={classes.root}>
                <AppBar position="static" style={{backgroundColor: "#00303f"}}>
                    <Toolbar>
                      <Typography variant="h6" className={classes.title}>
                      AllAboutPets
                      </Typography>
                      <Button 
                        color="inherit" 
                        onClick={() => history.push("/dogs")}
                        >Dogs
                      </Button>
                      <Button 
                        color="inherit" 
                        onClick={() => history.push("/")}
                        >Cats
                      </Button>
                      <Button 
                        color="inherit" 
                        onClick={() => history.push("/about")}
                        >About
                      </Button>
                    </Toolbar>
                </AppBar>
            </div>  
    )
}

export default Navbar