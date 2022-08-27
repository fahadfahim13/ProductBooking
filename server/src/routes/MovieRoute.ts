import express from 'express';
import { MovieCreateRequest, GETMovieListRequest, GETMovieDetailsRequest, SearchMoviesRequest, AddActorToMovieRequest, AddCategoryToMovieRequest } from '../requests/MovieRequests';
import RequestValidator from '../middlewares/RequestValidator';
import { Container } from 'typedi';
import MovieController from '../controllers/MovieController';

const router = express.Router();


const movieController = Container.get(MovieController);

router.post('/create', RequestValidator.validate(MovieCreateRequest), movieController.createMovie);
router.get('/count', movieController.getTotalMovieCount);
router.post('/list', RequestValidator.validate(GETMovieListRequest), movieController.getMovieList);
router.post('/details', RequestValidator.validate(GETMovieDetailsRequest), movieController.getMovieDetails);
router.post('/search', RequestValidator.validate(SearchMoviesRequest), movieController.searchMovies);
router.post('/add-actor', RequestValidator.validate(AddActorToMovieRequest), movieController.addActorToMovie);
router.post('/add-category', RequestValidator.validate(AddCategoryToMovieRequest), movieController.addCategoryToMovie);
router.get('/all', movieController.getAllMovies);

export default router;
