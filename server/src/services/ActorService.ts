import { ApplicationError } from '../utils/ApiError';
import { Service } from 'typedi';
import ActorRepository from '../repositories/ActorRepository';
import { LoggerClient } from './LoggerClient';
import { Actor } from '../models/Actor';
import { Identifier } from 'sequelize/types';

@Service()
export default class ActorService {
  constructor(public actorRepository: ActorRepository, public logger: LoggerClient) {}

  createActor = async (name: string, image?: string) => {
    this.logger.info(`Request for an actor creation with name: ${name}, image_link: ${image}.`);
    const result = await this.actorRepository.createActor(name, image);
    return result;
  };

  updateActor = async (id: Identifier, name: string, image?: string) => {
    this.logger.info(`Request for an actor update with id: ${id}, name: ${name}, image_link: ${image}.`);
    const result = await this.actorRepository.updateActorDetails(id, {name, image});
    return result;
  };

  getAllActors = async () => {
    const result = await this.actorRepository.getAllActors();
    return result;
  };

  getActorDetails = async (id: Identifier) => {
    this.logger.info(`Request for fetching an actor details with id: ${id}.`);
    const result = await this.actorRepository.getActorDetails(id);
    if(!result){
        throw new ApplicationError('No Actor found with this id');
    }
    return result;
  };

}
