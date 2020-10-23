import { Router } from "express";

import OrphanagesControllers from './controllers/OrphanagesControllers';

const routes = Router();

routes.post('/orphanages', OrphanagesControllers.create)
export default routes;
