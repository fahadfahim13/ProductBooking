import { Actor } from '../models/Actor';
import { Service } from 'typedi';
import { Identifier, Op } from 'sequelize';
@Service()
export default class ActorRepository {
  createActor = async (name: string, image?: string): Promise<Actor> => {
    const user = Actor.build({ name, image });
    return await user.save();
  };

  getAllActors = async (): Promise<Actor[]> => {
    return await Actor.findAll();
  };

  getActorDetails = async (id: Identifier): Promise<Actor | null> => {
    const actor = await Actor.findByPk(id);
    return actor;
  };

  updateActorDetails = async (id: Identifier, actor: {name: string; image?: string;}): Promise<[affectedCount: number]> => {
    return await Actor.update(actor, {where: { id }});
  }

}
