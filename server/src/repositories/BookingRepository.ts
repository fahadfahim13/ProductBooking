import { Service } from 'typedi';
import { Identifier } from 'sequelize';
import { Booking } from '../models/Booking';
import { Product } from '../models/Product';
import { ProductBookings } from '../models/ProductBookings';

@Service()
export default class BookingRepository {
  createBooking = async (dateFrom: number, dateTo: number, product: Product): Promise<Booking> => {
    const booking = Booking.build({ dateFrom, dateTo });
    await booking.save();
    await booking.$add('products', product);
    return booking;
  };

  getAllBookings = async (): Promise<ProductBookings[]> => {
    return await ProductBookings.findAll({ include: [Product, Booking], order: [['id', 'ASC']] });
  };

  getBookingeDetails = async (id: Identifier): Promise<ProductBookings | null> => {
    const movie = await ProductBookings.findByPk(id, { include: [Product, Booking] });
    return movie;
  };

}
