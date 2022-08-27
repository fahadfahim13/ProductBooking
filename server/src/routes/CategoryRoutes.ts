import express from 'express';
import { CategoryCreateRequest, CategoryUpdateRequest, GETCategoryDetailsRequest } from '../requests/CategoryRequests';
import RequestValidator from '../middlewares/RequestValidator';
import { Container } from 'typedi';
import CategoryController from '../controllers/CategoryController';

const router = express.Router();


const categoryController = Container.get(CategoryController);

router.post('/create', RequestValidator.validate(CategoryCreateRequest), categoryController.createCategory);
router.post('/update', RequestValidator.validate(CategoryUpdateRequest), categoryController.updateCategory);
router.post('/details', RequestValidator.validate(GETCategoryDetailsRequest), categoryController.getCategoryDetails);
router.get('/all', categoryController.getAllCategories);

export default router;
