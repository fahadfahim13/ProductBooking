import React from 'react'
import { Card, CardMedia, CardContent, CardActions, Typography } from '@mui/material';
import { MovieProps } from './types';
import ActorItem from 'components/ActorItem';


const MovieCard = (movie: MovieProps) => {
  const { id, title, description, showActor=true, actors } = movie;
  
  return (
    <Card sx={{ maxWidth: 345, height: '420px' }} key={id}>
      <CardMedia
        component="div"
        style={{ width: '90%', height: '150px', marginLeft: '5%', marginTop: '5%', backgroundColor: "#E8F0D6"}}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      {(showActor && actors)? <CardActions>
        {(actors.length > 0 && actors[0])? <ActorItem actorName={actors[0].name} characterName={actors[0].MovieActors.characterName} /> : ''}
        {(actors.length > 1 && actors[1])? <ActorItem actorName={actors[1].name} characterName={actors[1].MovieActors.characterName} /> : ''}
      </CardActions>: null}
    </Card>
  )
}

export default MovieCard;