import { ApplicationError } from '../utils/ApiError';
import { Service } from 'typedi';
import { LoggerClient } from './LoggerClient';
import { Identifier } from 'sequelize/types';
import BookingRepository from '../repositories/BookingRepository';
import { Product } from '../models/Product';
import { ProductBookings } from '../models/ProductBookings';

@Service()
export default class MovieService {
  constructor(public bookingRepository: BookingRepository, public logger: LoggerClient) {}

  createBooking = async (dateFrom: number, dateTo: number, product: Product) => {
    this.logger.info(`Request for a booking creation with date from: ${dateFrom}, product: ${product.name}.`);
    const result = await this.bookingRepository.createBooking(dateFrom, dateTo, product);
    return result;
  };

  getMovieDetails = async (id: Identifier) => {
    const productBooking: ProductBookings | null = await this.bookingRepository.getBookingeDetails(id);
    if(!productBooking){
        throw new ApplicationError('No Booking found with this id');
    }
    return productBooking;
  };

}
