import { Router } from 'express';

import HelloWordRouter from './router';

const router = Router();

const helloWordRouter = new HelloWordRouter({ router });

export default helloWordRouter;
