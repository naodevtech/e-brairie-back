import express from 'express';
import Server from './src/config/server';
import config from './src/config/env';
import routes from './src/modules';
import swaggerUi from 'swagger-ui-express';
import yaml from 'yamljs';
import cookieParser from 'cookie-parser';

import { handleError } from './src/helpers/error';

const swaggerOptions = yaml.load('./swagger.yml');
const application = new Server({
  express,
  routes,
  cookieParser,
  swaggerUi,
  swaggerOptions,
  handleError
});

application.listen(config.app_port);
