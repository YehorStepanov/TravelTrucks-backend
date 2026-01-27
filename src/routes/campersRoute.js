import { Router } from 'express';
import { campersController, campersByIdController} from '../controllers/campersController.js';
import ctrl from '../helper/CtrlWrapper.js';

const route = Router();

route.get('/api/campers', ctrl(campersController));
route.get('/api/campers/:id', ctrl(campersByIdController));


export default route;
