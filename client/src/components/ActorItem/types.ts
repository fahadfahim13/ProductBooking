export interface MovieActor {
    characterName: string;
    movieId: number;
    actorId: number;
}

export interface Actor {
    id: number;
    name: string;
    image: string;
    MovieActors: MovieActor
}