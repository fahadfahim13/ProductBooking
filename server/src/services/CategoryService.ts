import { ApplicationError } from '../utils/ApiError';
import { Service } from 'typedi';
import CategoryRepository from '../repositories/CategoryRepository';
import { LoggerClient } from './LoggerClient';
import { Identifier } from 'sequelize/types';

@Service()
export default class CaegoryService {
  constructor(public categoryRepository: CategoryRepository, public logger: LoggerClient) {}

  createCategory = async (name: string) => {
    this.logger.info(`Request for a category creation with name: ${name}.`);
    const result = await this.categoryRepository.createCategory(name);
    return result;
  };

  updateCategory = async (id: Identifier, name: string) => {
    this.logger.info(`Request for a category update with id: ${id}, name: ${name}.`);
    const result = await this.categoryRepository.updateCategoryDetails(id, {name});
    return result;
  };

  getAllCategories = async () => {
    const result = await this.categoryRepository.getAllCategories();
    return result;
  };

  getCategoryDetails = async (id: Identifier) => {
    this.logger.info(`Request for fetching a category details with id: ${id}.`);
    const result = await this.categoryRepository.getCategoryDetails(id);
    if(!result){
        throw new ApplicationError('No Category found with this id');
    }
    return result;
  };

}
