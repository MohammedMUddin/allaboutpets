import React from 'react'
import PetsRoundedIcon from '@material-ui/icons/PetsRounded'
import { Button, Grid, Typography, Card, CardMedia, CardContent} from '@material-ui/core'


function DogContent(props) {

    if ( !props.filterdItem){
        return <p>Loading...</p>
    } 
    return (
        <Grid 
        container 
        direction ="column" 
        alignItems="center"
        spacing={1}
        style={{backgroundColor: "#f5f4f4", minHeight: "95vh"}} 
        > 
            
            <Grid item xs={10} md={4}>
                <Card> 
                    <CardMedia 
                        component="img"
                        height="auto"
                        image={props.filterdItem.image.url}
                    />
                </Card>
            </Grid>
            <Grid item xs={10} md={4}>
                <Card minWidth="310"> 
                    <CardContent height="100%" style={{backgroundColor: "#cae4db"}}>
                        <Typography variant="h6" style={{"fontWeight": "bold"}}>
                        {props.filterdItem.name}
                        </Typography>
                        {/* The below three lines are conditionally rendered */}
                        {(props.filterdItem.life_span) ? 
                        <Typography>
                            <Typography 
                            variant="body1"
                            style={{"fontWeight": "bold"}}
                            >Average life span:
                            </Typography>
                            <Typography 
                            variant="body1">{props.filterdItem.life_span}
                            </Typography>
                        </Typography>
                        : null}
                        {(props.filterdItem.bred_for) ? 
                        <Typography>
                            <Typography 
                            variant="body1"
                            style={{"fontWeight": "bold"}}
                            >Usually bred for:
                            </Typography>
                            <Typography 
                            variant="body1">{props.filterdItem.bred_for}
                            </Typography>
                        </Typography>
                        : null}
                        {(props.filterdItem.temperament) ? 
                        <Typography>
                            <Typography 
                            variant="body1"
                            style={{"fontWeight": "bold"}}
                            >Personality:
                            </Typography>
                            <Typography 
                            variant="body1">{props.filterdItem.temperament}
                            </Typography>
                        </Typography>
                        : null}
                    </CardContent>
                </Card>
            </Grid>
            <Grid item container direction ="column" alignItems="center">              
                <Grid item>
                    <Button 
                        variant="contained" 
                        style={{backgroundColor: "#00303f", color:"#ffffff"}} 
                        startIcon={<PetsRoundedIcon />} 
                        onClick={props.handleChange}
                        > Next!
                    </Button>
                </Grid>
            </Grid>
    </Grid>
  )
}

export default DogContent;