import { ApplicationError } from '../utils/ApiError';
import { Service } from 'typedi';
import ProductRepository from '../repositories/ProductRepository';
import { LoggerClient } from './LoggerClient';
import { Identifier } from 'sequelize/types';
import { Product } from '../models/Product';

@Service()
export default class ProductService {
  constructor(public productRepository: ProductRepository, public logger: LoggerClient) {}

  createProduct = async (product: Product) => {
    this.logger.info(`Request for a product creation with name: ${product.name}, code: ${product.code}.`);
    const result = await this.productRepository.createProduct(product);
    return result;
  };

  getAllProducts = async () => {
    const result = await this.productRepository.getAllProducts();
    return result;
  };

  getProductDetails = async (id: Identifier) => {
    const result: Product | null = await this.productRepository.getProductDetails(id);
    if(!result){
        throw new ApplicationError(`No Product found with this id ${id}`);
    }
    return result;
  };
  
}
