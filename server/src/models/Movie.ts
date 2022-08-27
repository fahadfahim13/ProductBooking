import { Table, Model, Column, DataType, BelongsToMany } from 'sequelize-typescript';
import { Actor } from './Actor';
import { Category } from './Category';
import { MovieActors } from './MovieActors';
import { MovieCategories } from './MovieCategories';

@Table({
  timestamps: false,
  tableName: 'movies',
})
export class Movie extends Model {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  title!: string;

  @Column({
    type: DataType.STRING(2000),
    allowNull: false,
    defaultValue: '',
  })
  description!: string;

  @Column({
    type: DataType.FLOAT,
    allowNull: true,
    defaultValue: 0,
  })
  rating!: number;

  @BelongsToMany(() => Actor, () => MovieActors)
  actors: MovieActors[];

  @BelongsToMany(() => Category, () => MovieCategories)
  categories: Category[];
}
