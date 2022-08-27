import { ApplicationError } from '../utils/ApiError';
import { Service } from 'typedi';
import MovieRepository from '../repositories/MovieRepository';
import ActorRepository from '../repositories/ActorRepository';
import CategoryRepository from '../repositories/CategoryRepository';
import { LoggerClient } from './LoggerClient';
import { Movie } from '../models/Movie';
import { Identifier } from 'sequelize/types';
import { Actor } from '../models/Actor';
import { Category } from '../models/Category';

@Service()
export default class MovieService {
  constructor(public movieRepository: MovieRepository, public actorService: ActorRepository, public categoryService: CategoryRepository, public logger: LoggerClient) {}

  createMovie = async (title: string, description: string, rating?: number) => {
    this.logger.info(`Request for a movie creation with title: ${title}, description: ${description}.`);
    const result = await this.movieRepository.createMovie(title, description, rating);
    return result;
  };

  getAllMovies = async () => {
    const result = await this.movieRepository.getAllMovies();
    return result;
  };

  getTotalMovieCount = async () => {
    const result = await this.movieRepository.getTotalMovies();
    return result;
  };

  searchMovie = async (title: string) => {
    this.logger.info(`Searching for movies with title like: ${title}.`);
    const result = await this.movieRepository.findByTitle(title);
    return result;
  };

  getMovieList = async (limit: number, offset: number) => {
    const result = await this.movieRepository.getPaginatedMovies(limit, offset);
    return result;
  };

  getMovieDetails = async (id: Identifier) => {
    const movie: Movie | null = await this.movieRepository.getMovieDetails(id);
    if(!movie){
        throw new ApplicationError('No Movie found with this id');
    }
    return movie;
  };

  addActorToMovie = async (movieId: Identifier, actorId: Identifier, characterName: string) => {
    const movie: Movie | null = await this.movieRepository.getMovieDetails(movieId);
    if(!movie){
        throw new ApplicationError('No Movie found with this id');
    }
    const actor: Actor | null = await this.actorService.getActorDetails(actorId);
    if(!actor){
        throw new ApplicationError('No Actor found with this id');
    }
    const result = await this.movieRepository.addActorToMovie(movie, actor, characterName);
    return result;
  };

  addCategoryToMovie = async (movieId: Identifier, categoryId: Identifier) => {
    const movie: Movie | null = await this.movieRepository.getMovieDetails(movieId);
    if(!movie){
        throw new ApplicationError('No Movie found with this id');
    }
    const category: Category | null = await this.categoryService.getCategoryDetails(categoryId);
    if(!category){
        throw new ApplicationError('No Category found with this id');
    }
    const result = await this.movieRepository.addCategoryToMovie(movie, category);
    return result;
  };
}
