import { Router } from 'express';

import HelloWordRouter from './router';

import errorNotification from '../../middlewares/errorNotification';

const router = Router();

const helloWordRouter = new HelloWordRouter({ router, errorNotification });

export default helloWordRouter;
