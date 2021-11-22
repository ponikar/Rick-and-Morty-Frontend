import React from 'react'
import {
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Button,
    Typography,
} from "@material-ui/core/";

import { useDispatch } from 'react-redux';
import useStyles from "./styles";

import {createCard} from "../../../actions/cards"

const CardItem = ({item}) => {
    const dispatch = useDispatch();
    const classes = useStyles();
    
    return (
        
        <Card className={classes.card}>
            
                <CardMedia
                className={classes.media}
                component="img"
                image={item.image}
                alt={item.name}
                />
                <CardContent>
                <Typography className={classes.title} gutterBottom variant="h8" component="h4" color="text-primary" >
                   <strong> {item.name} </strong>
                </Typography>
 
                <Typography className={classes.h9}  variant="h9" color="text-secondary" component="p"><strong>Status: </strong> {item.status}</Typography>
                <Typography className={classes.h9}  variant="h9" color="text-secondary" component="p"><strong>Gender: </strong> {item.gender}</Typography>
                <Typography  variant="h9" color="text-secondary" component="p"><strong>Species: </strong> {item.species}</Typography>
        
                </CardContent>
            
           
            <CardActions className={classes.CardActions}>
                <Button size="small" color="primary" onClick={() => dispatch(createCard(item))} >
                 Save
                </Button>
        
            </CardActions>
        </Card>

    )
}

export default CardItem;

