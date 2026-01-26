import { Router } from 'express';
import { campersController } from '../controllers/campersController.js';
import ctrl from '../helper/CtrlWrapper.js';

const route = Router();

route.get('/campers', ctrl(campersController));
route.get('/campers/:id', ctrl(campersController));

export default route;
