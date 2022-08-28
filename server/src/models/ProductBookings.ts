import { Table, Model, Column, ForeignKey } from 'sequelize-typescript';
import { Product } from './Product';
import { Booking } from './Booking';

@Table({
  timestamps: false,
  tableName: 'product_bookings',
})
export class ProductBookings extends Model {

  @ForeignKey(() => Product)
  @Column
  productId: number;

  @ForeignKey(() => Booking)
  @Column
  bookingId: number;
}
