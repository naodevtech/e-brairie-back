import express from 'express';
import Server from './src/config/server';
import config from './src/config/env';
import routes from './src/modules';
import swaggerUi from 'swagger-ui-express';
import yaml from 'yamljs';
import errorHandler from 'errorhandler';

const swaggerOptions = yaml.load('./swagger.yml');
const application = new Server({
  express,
  routes,
  swaggerUi,
  swaggerOptions,
  errorHandler
});

application.listen(config.app_port);
