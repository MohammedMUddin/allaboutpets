import React from 'react'
import {Typography, Card, CardContent, Grid} from '@material-ui/core'


export default function About(){

    const cardstyle = {
        maxWidth: 345, 
      };
    
    const contentstyle = {
        minWidth: 310,
        maxWidth: 345, 
      };

    return (    
        <Grid container direction ="column" alignItems="center" spacing={1}>
             <Grid item xs={1}></Grid>
            <Grid item xs={12}>
                <Card style={contentstyle}> 
                    <CardContent height="100%" style={{backgroundColor: "#cae4db"}}>
                        <Typography variant="h6" style={{"fontWeight": "bold"}}>
                            This page was my first attempt at a react webapp. 
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    )
}