import { Table, Model, Column, ForeignKey } from 'sequelize-typescript';
import { Category } from './Category';
import { Movie } from './Movie';

@Table({
  timestamps: false,
  tableName: 'movie_categories',
})
export class MovieCategories extends Model {
  @ForeignKey(() => Movie)
  @Column
  movieId: number;

  @ForeignKey(() => Category)
  @Column
  categoryId: number;
}
