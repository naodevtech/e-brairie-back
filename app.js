import express from 'express';
import Server from './src/config/server';
import config from './src/config/env';
import routes from './src/modules';
import cors from 'cors';
import cookieParser from 'cookie-parser';

import { handleError } from './src/helpers/error';

const application = new Server({
  express,
  cors,
  routes,
  cookieParser,
  handleError
});

application.listen(config.app_port);
