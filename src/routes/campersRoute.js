import { Router } from 'express';
import { campersController, campersByIdController} from '../controllers/campersController.js';
import ctrl from '../helper/ctrlWrapper.js';

const route = Router();

route.get('/api/campers/:id', ctrl(campersByIdController));
route.get('/api/campers', ctrl(campersController));


export default route;
