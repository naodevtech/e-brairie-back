import { createContainer, Lifetime, asClass, asValue } from 'awilix';
import express, { Router } from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import cookieParser from 'cookie-parser';
import { ApiError, handleError } from './helpers/error';
import Server from './config/server';
import config from './config/env';
import db from './config/db/config/database';

const container = createContainer();
const router = Router();

// Register bases dependencies
container.register({
  config: asValue(config),
  bcrypt: asValue(bcrypt),
  jwt: asValue(jwt),
  cookieParser: asValue(cookieParser),
  ApiError: asValue(ApiError),
  handleError: asValue(handleError),
  express: asValue(express),
  router: asValue(router)
});

// register all the modules
container.loadModules(
  [
    'modules/**/*!(Dao$).js',
    'middlewares/*!(index).js',
    'libs/*!(index).js',
    'utils/*!(index).js'
  ],
  {
    resolverOptions: {
      lifetime: Lifetime.SINGLETON
    },
    cwd: __dirname
  }
);

// register all the DAO (we need use asValue register parameter here)
container.loadModules(['modules/**/*Dao.js'], {
  resolverOptions: {
    lifetime: Lifetime.SINGLETON,
    register: asValue
  },
  cwd: __dirname
});

// Resolve and associate the models
const daoNames = Object.keys(container.registrations).filter((item) =>
  item.match(/Dao$/g)
);
const models = daoNames
  .map((dao) => container.resolve(dao))
  .map((dao) => dao.associate(db.sequelize.models));
db.sequelize.models = models.map((model) => {
  return { [model]: model };
});

// database migration (alter option update the tables schema without erase any data)
db.sequelize.sync({ alter: true });

// Resolve the registered routes
const routesName = Object.keys(container.registrations).filter((item) =>
  item.match(/Router$/g)
);
const routes = routesName.map((route) => container.resolve(route));

// register all the routes and the server
container.register({
  routes: asValue(routes),
  server: asClass(Server).singleton()
});

export default container;
