import express from 'express';
import Server from './src/config/server';
import config from './src/config/env';
import routes from './src/modules';
import cors from 'cors';
import cookieParser from 'cookie-parser';

import { csrf } from './src/middlewares';
import { handleError } from './src/helpers/error';

// const middlewares = { cookieParser, csrf };

const application = new Server({
  express,
  cors,
  routes,
  cookieParser,
  csrf,
  handleError
});

application.listen(config.app_port);
