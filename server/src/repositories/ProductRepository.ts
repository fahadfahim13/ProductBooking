import { Service } from 'typedi';
import { Identifier } from 'sequelize';
import { Product } from '../models/Product';

@Service()
export default class ProductRepository {
  createProduct = async (product: Product): Promise<Product> => {
    const user = Product.build({...product});
    return await user.save();
  };

  getAllProducts = async (): Promise<Product[]> => {
    return await Product.findAll();
  };

  getProductDetails = async (id: Identifier): Promise<Product | null> => {
    const prod = await Product.findByPk(id);
    return prod;
  };

}
