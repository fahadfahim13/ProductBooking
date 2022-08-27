import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class MovieCreateRequest {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNotEmpty()
  @IsString()
  description: string;

  @IsNumber()
  rating?: number;
}


export class GETMovieListRequest {
    @IsNotEmpty()
    @IsNumber()
    limit: number;

    @IsNotEmpty()
    @IsNumber()
    offset: number;
  }
  
export class GETMovieDetailsRequest {
    @IsNotEmpty()
    @IsNumber()
    id: number;
}

export class SearchMoviesRequest {
    @IsNotEmpty()
    @IsString()
    title: string;
}

export class AddActorToMovieRequest {
    @IsNotEmpty()
    @IsNumber()
    movieId: number;

    @IsNotEmpty()
    @IsNumber()
    actorId: number;

    @IsNotEmpty()
    @IsString()
    characterName: string;
}


export class AddCategoryToMovieRequest {
  @IsNotEmpty()
  @IsNumber()
  movieId: number;

  @IsNotEmpty()
  @IsNumber()
  categoryId: number;
}
