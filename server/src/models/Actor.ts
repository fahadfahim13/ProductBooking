import { Table, Model, Column, DataType, BelongsToMany } from 'sequelize-typescript';
import { Movie } from './Movie';
import { MovieActors } from './MovieActors';

@Table({
  timestamps: false,
  tableName: 'actors',
})
export class Actor extends Model {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name!: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
    defaultValue: '',
  })
  image!: string;

  @BelongsToMany(() => Movie, () => MovieActors)
  movies: MovieActors[]
}
