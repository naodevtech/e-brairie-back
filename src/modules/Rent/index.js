import { Router } from 'express';

import db from '../../config/db/models';

import { ApiError } from '../../helpers/error';
import responseHandler from '../../helpers/response';

import { jwtService } from '../../libs/';

import RentController from './controllers';
import RentRouter from './router';
import RentService from './services';
import RentRepository from './repository';

import AuthMiddleWare from '../../middlewares/auth';

const Rent = require('./rentDao');
const Book = require('../Book/bookDao');

const router = Router();

const rentDao = Rent(db.sequelize, db.Sequelize.DataTypes);
const bookDao = Book(db.sequelize, db.Sequelize.DataTypes);

const auth = new AuthMiddleWare({
  jwtService,
  ApiError
});

const rentRepository = new RentRepository({
  rentDao,
  bookDao,
  ApiError
});

const rentService = new RentService({
  rentRepository,
  ApiError
});

const rentController = new RentController({
  rentService,
  responseHandler
});

const rentRouter = new RentRouter({
  router,
  auth,
  rentController,
  responseHandler
});

export default rentRouter;
