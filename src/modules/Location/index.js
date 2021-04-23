import { Router } from 'express';

import db from '../../config/db/models';

import { ApiError } from '../../helpers/error';
import responseHandler from '../../helpers/response';

import { jwtService } from '../../libs/';

import LocationController from './controllers';
import LocationRouter from './router';
import LocationService from './services';
import LocationRepository from './repository';

import AuthMiddleWare from '../../middlewares/auth';

const Location = require('./locationDao');

const router = Router();

const locationDao = Location(db.sequelize, db.Sequelize.DataTypes);

const auth = new AuthMiddleWare({
  jwtService,
  ApiError
});

const locationRepository = new LocationRepository({
  locationDao,
  ApiError
});

const locationService = new LocationService({
  locationRepository,
  ApiError
});

const locationController = new LocationController({
  locationService,
  responseHandler
});

const locationRouter = new LocationRouter({
  router,
  auth,
  locationController,
  responseHandler
});

export default locationRouter;
