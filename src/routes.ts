import express, { request, response } from 'express';
 
import PointsControllers from './controllers/PointsControllers';
import IntemsControlers from './controllers/IntemsControlers';

const routes = express.Router();

const pointsControllers = new PointsControllers();
const intemsControles = new IntemsControlers();

routes.get('/items', intemsControles.index);

routes.post('/points', pointsControllers.create);
routes.get('/points/:id', pointsControllers.show);

export default routes;