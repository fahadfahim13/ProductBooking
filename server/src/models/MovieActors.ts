import { Table, Model, Column, DataType, ForeignKey } from 'sequelize-typescript';
import { Actor } from './Actor';
import { Movie } from './Movie';

@Table({
  timestamps: false,
  tableName: 'movie_actors',
})
export class MovieActors extends Model {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  characterName!: string;

  @ForeignKey(() => Movie)
  @Column
  movieId: number;

  @ForeignKey(() => Actor)
  @Column
  actorId: number;
}
