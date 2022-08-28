import { Table, Model, Column, DataType, BelongsToMany } from 'sequelize-typescript';
import { Product } from './Product';
import { ProductBookings } from './ProductBookings';

@Table({
  timestamps: false,
  tableName: 'bookings',
})
export class Booking extends Model {
  @Column({
    type: DataType.BIGINT,
    allowNull: false,
  })
  dateFrom!: number;

  @Column({
    type: DataType.BIGINT,
    allowNull: false,
  })
  dateTo!: number;

  @BelongsToMany(() => Product, () => ProductBookings)
  products: Product[];

}
