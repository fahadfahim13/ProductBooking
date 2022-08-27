import { Request } from 'express';
import MovieService from '../services/MovieService';
import { asyncWrapper } from '../utils/asyncWrapper';
import { SuccessResponse } from '../utils/SuccessResponse';
import { Service } from 'typedi';

@Service()
export default class MovieController {

  constructor(public movieService: MovieService) {}

  createMovie = asyncWrapper(async (req: Request) => {
    const { title, description, rating } = req.body;
    const response = await this.movieService.createMovie(title, description, rating);
    return new SuccessResponse(response);
  });

  getMovieList = asyncWrapper(async (req: Request) => {
    const { limit, offset } = req.body;
    const response = await this.movieService.getMovieList(limit, offset);
    return new SuccessResponse(response);
  });

  getMovieDetails = asyncWrapper(async (req: Request) => {
    const { id } = req.body;
    const response = await this.movieService.getMovieDetails(id);
    return new SuccessResponse(response);
  });

  searchMovies = asyncWrapper(async (req: Request) => {
    const { title } = req.body;
    const result = await this.movieService.searchMovie(title);
    return new SuccessResponse(result);
  });

  getAllMovies = asyncWrapper(async () => {
    const response = await this.movieService.getAllMovies();
    return new SuccessResponse(response);
  });

  getTotalMovieCount = asyncWrapper(async () => {
    const response = await this.movieService.getTotalMovieCount();
    return new SuccessResponse(response);
  });

  addActorToMovie = asyncWrapper(async (req: Request) => {
    const { movieId, actorId, characterName } = req.body;
    const result = await this.movieService.addActorToMovie(movieId, actorId, characterName);
    return new SuccessResponse(result);
  });

  addCategoryToMovie = asyncWrapper(async (req: Request) => {
    const { movieId, categoryId } = req.body;
    const result = await this.movieService.addCategoryToMovie(movieId, categoryId);
    return new SuccessResponse(result);
  });
}
