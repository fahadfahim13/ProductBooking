import { Service } from 'typedi';
import { Identifier, Op } from 'sequelize';
import { Category } from '../models/Category';
@Service()
export default class CategoryRepository {
  createCategory = async (name: string): Promise<Category> => {
    const category = Category.build({ name });
    return await category.save();
  };

  getAllCategories = async (): Promise<Category[]> => {
    return await Category.findAll();
  };

  getCategoryDetails = async (id: Identifier): Promise<Category | null> => {
    const cat = await Category.findByPk(id);
    return cat;
  };

  updateCategoryDetails = async (id: Identifier, actor: {name: string}): Promise<[affectedCount: number]> => {
    return await Category.update(actor, {where: { id }});
  }

}
