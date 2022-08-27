import express from 'express';
import { ActorCreateRequest, ActorUpdateRequest, GETActorDetailsRequest } from '../requests/ActorRequests';
import RequestValidator from '../middlewares/RequestValidator';
import { Container } from 'typedi';
import ActorController from '../controllers/ActorController';

const router = express.Router();


const actorController = Container.get(ActorController);

router.post('/create', RequestValidator.validate(ActorCreateRequest), actorController.createActor);
router.post('/update', RequestValidator.validate(ActorUpdateRequest), actorController.updateActor);
router.post('/details', RequestValidator.validate(GETActorDetailsRequest), actorController.getActorDetails);
router.get('/all', actorController.getAllActors);

export default router;
