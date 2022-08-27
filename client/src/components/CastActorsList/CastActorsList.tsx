import ActorItem from 'components/ActorItem';
import { Movie } from 'components/MovieCard/types'
import React from 'react'

const CastActorsList = (props: Movie) => {
    const { actors } = props;
  return (
    <div style={{ marginBottom: '3%', width: '95%', display: 'inline-block', boxSizing: 'border-box', border: '1px solid #000000'}}> 
    {actors.map((actor, index) => 
      <section style={{width: '30%', float: 'left', padding: '20px'}}>
        <ActorItem actorName={actor.name} characterName={actor.MovieActors.characterName ?? ''} />
      </section>
    )}
    </div>
  )
}

export default CastActorsList;