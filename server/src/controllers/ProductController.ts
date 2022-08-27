import { Request } from 'express';
import { Service } from 'typedi';
import { asyncWrapper } from '../utils/asyncWrapper';
import { SuccessResponse } from '../utils/SuccessResponse';
import ProductService from '../services/ProductService';
import { Product } from '../models/Product';

@Service()
export default class ProductController {

  constructor(public productService: ProductService) {}

  createProduct = asyncWrapper(async (req: Request) => {
    const product: Product = req.body;
    console.log("Product: ", product);
    const response = await this.productService.createProduct(product);
    return new SuccessResponse(response);
  });

  getProductDetails = asyncWrapper(async (req: Request) => {
    const { id } = req.body;
    const response = await this.productService.getProductDetails(id);
    return new SuccessResponse(response);
  });

  getAllProducts = asyncWrapper(async () => {
    const response = await this.productService.getAllProducts();
    return new SuccessResponse(response);
  });
}
