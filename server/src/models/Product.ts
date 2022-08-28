import { Table, Model, Column, DataType, BelongsToMany } from 'sequelize-typescript';
import { Booking } from './Booking';
import { ProductBookings } from './ProductBookings';

@Table({
  timestamps: false,
  tableName: 'products',
})
export class Product extends Model {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  code!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  type!: string;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
  })
  availability!: boolean;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
  })
  needing_repair!: boolean;

  @Column({
    type: DataType.FLOAT,
    allowNull: false,
  })
  durability!: number;

  @Column({
    type: DataType.FLOAT,
    allowNull: false,
  })
  max_durability!: number;

  @Column({
    type: DataType.FLOAT,
    allowNull: true,
    defaultValue: null,
  })
  mileage: number | null;

  @Column({
    type: DataType.FLOAT,
    allowNull: false,
  })
  price!: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  minimum_rent_period!: number;

  @BelongsToMany(() => Booking, () => ProductBookings)
  booking: Booking[];

}
