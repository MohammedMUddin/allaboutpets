import React, {useState} from 'react'
import PetsRoundedIcon from '@material-ui/icons/PetsRounded'
import { Button, Grid, Typography, Card, CardMedia, CardContent} from '@material-ui/core'


export default function CatContent(props){
    const [randomNum, setRandomNum] = useState(5)

    const cardstyle = {
        maxWidth: 345, 
      };
    
    const contentstyle = {
        minWidth: 310,
        maxWidth: 345, 
      };
    
    
    function handleChangeCat(e){       
        e.preventDefault()
        setRandomNum(getRndInteger(1, 66))
    }

    function getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min + 1) ) + min;
    }

    let data
    if (props.filterdItem[randomNum].image && props.filterdItem[randomNum].image.url) {
        data = props.filterdItem[randomNum]
    } else {
        data = props.filterdItem[randomNum + 1]
    }


    return (
        <Grid 
        container 
        direction ="column" 
        alignItems="center"
        spacing={1}
        style={{backgroundColor: "#f5f4f4", minHeight: "95vh"}} 
        > 
            
            <Grid item xs={10}>
                <Card style={cardstyle}> 
                    <CardMedia 
                        component="img"
                        height="240"
                        image={data.image.url}
                    />
                </Card>
            </Grid>
            <Grid item xs={10}>
                <Card style={contentstyle}> 
                    <CardContent height="100%" style={{backgroundColor: "#cae4db"}}>
                        <Typography variant="h6" style={{"fontWeight": "bold"}}>
                        {data.name}
                        </Typography>
                        {/* The below three lines are conditionally rendered */}
                        {(data.life_span) ? 
                        <Typography>
                            <Typography 
                            variant="body1"
                            style={{"fontWeight": "bold"}}
                            >Average life span:
                            </Typography>
                            <Typography 
                            variant="body1">{data.life_span}
                            </Typography>
                        </Typography>
                        : null}
                        {(data.bred_for) ? 
                        <Typography>
                            <Typography 
                            variant="body1"
                            style={{"fontWeight": "bold"}}
                            >Usually bred for:
                            </Typography>
                            <Typography 
                            variant="body1">{data.bred_for}
                            </Typography>
                        </Typography>
                        : null}
                        {(data.temperament) ? 
                        <Typography>
                            <Typography 
                            variant="body1"
                            style={{"fontWeight": "bold"}}
                            >Personality:
                            </Typography>
                            <Typography 
                            variant="body1">{data.temperament}
                            </Typography>
                        </Typography>
                        : null}
                        {(data.description) ? 
                        <Typography>
                            <Typography 
                            variant="body1"
                            style={{"fontWeight": "bold"}}
                            >Description:
                            </Typography>
                            <Typography 
                            variant="body1">{data.description}
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
                        onClick={handleChangeCat}
                        > Next!
                    </Button>
                </Grid>
            </Grid>
    </Grid>
  )
}