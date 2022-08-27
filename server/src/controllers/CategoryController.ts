import { Request } from 'express';
import CategoryService from '../services/CategoryService';
import { asyncWrapper } from '../utils/asyncWrapper';
import { SuccessResponse } from '../utils/SuccessResponse';
import { Service } from 'typedi';

@Service()
export default class CategoryController {

  constructor(public categoryService: CategoryService) {}

  createCategory = asyncWrapper(async (req: Request) => {
    const { name } = req.body;
    const response = await this.categoryService.createCategory(name);
    return new SuccessResponse(response);
  });

  updateCategory = asyncWrapper(async (req: Request) => {
    const { id, name } = req.body;
    const response = await this.categoryService.updateCategory(id, name);
    return new SuccessResponse(response);
  });

  getCategoryDetails = asyncWrapper(async (req: Request) => {
    const { id } = req.body;
    const response = await this.categoryService.getCategoryDetails(id);
    return new SuccessResponse(response);
  });

  getAllCategories = asyncWrapper(async () => {
    const response = await this.categoryService.getAllCategories();
    return new SuccessResponse(response);
  });
}
