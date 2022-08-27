import { Movie } from '../models/Movie';
import { Service } from 'typedi';
import { Identifier, Op } from 'sequelize';
import { Actor } from '../models/Actor';
import { Category } from '../models/Category';

@Service()
export default class MovieRepository {
  createMovie = async (title: string, description: string, rating?: number): Promise<Movie> => {
    const user = Movie.build({ title, description, rating });
    return await user.save();
  };

  getAllMovies = async (): Promise<Movie[]> => {
    return await Movie.findAll({ include: [Actor, Category], order: [['id', 'ASC']] });
  };

  getTotalMovies = async (): Promise<number> => {
    const result = await Movie.findAndCountAll();
    return result.count;
  };

  getPaginatedMovies = async (limit: number, offset: number): Promise<Movie[]> => {
    return await Movie.findAll({ limit, offset, include: [Actor, Category], order: [['id', 'ASC']] });
  };

  getMovieDetails = async (id: Identifier): Promise<Movie | null> => {
    const movie = await Movie.findByPk(id);
    return movie;
  };

  findByTitle = async (title: string): Promise<Movie[]> => {
    const result = await Movie.findAll({ where: { title: { [Op.iLike]: `%${title}%` } }, order: [['id', 'ASC']] });
    return result;
  };

  addActorToMovie = async(movie: Movie, actor: Actor, characterName: string) => {
    const movieResult = await movie.$add('actors', actor, { through: { characterName } });
    console.log(movieResult);
    const actorResult = await actor.$add('movies', movie, { through: { characterName } });
    console.log(actorResult);
    const result = await Movie.findOne({where: { id: movie.id }, include: Actor });
    return result;
  }

  addCategoryToMovie = async(movie: Movie, category: Category) => {
    await movie.$add('categories', category);
    await category.$add('movies', movie);
    const result = await Movie.findOne({where: { id: movie.id }, include: [Actor, Category] });
    return result;
  }
}
