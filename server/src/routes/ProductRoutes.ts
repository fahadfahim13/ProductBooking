import express from 'express';
import { ProductCreateRequest, GETProductDetailsRequest } from '../requests/ProductRequests';
import RequestValidator from '../middlewares/RequestValidator';
import { Container } from 'typedi';
import ProductController from '../controllers/ProductController';

const router = express.Router();


const productController = Container.get(ProductController);

router.post('/create', RequestValidator.validate(ProductCreateRequest), productController.createProduct);
router.post('/details', RequestValidator.validate(GETProductDetailsRequest), productController.getProductDetails);
router.get('/all', productController.getAllProducts);

export default router;
