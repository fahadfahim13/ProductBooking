import { Request } from 'express';
import ActorService from '../services/ActorService';
import { asyncWrapper } from '../utils/asyncWrapper';
import { SuccessResponse } from '../utils/SuccessResponse';
import { Service } from 'typedi';

@Service()
export default class ActorController {

  constructor(public actorService: ActorService) {}

  createActor = asyncWrapper(async (req: Request) => {
    const { name, image } = req.body;
    const response = await this.actorService.createActor(name, image);
    return new SuccessResponse(response);
  });

  updateActor = asyncWrapper(async (req: Request) => {
    const { id, name, image } = req.body;
    const response = await this.actorService.updateActor(id, name, image);
    return new SuccessResponse(response);
  });

  getActorDetails = asyncWrapper(async (req: Request) => {
    const { id } = req.body;
    const response = await this.actorService.getActorDetails(id);
    return new SuccessResponse(response);
  });

  getAllActors = asyncWrapper(async () => {
    const response = await this.actorService.getAllActors();
    return new SuccessResponse(response);
  });
}
