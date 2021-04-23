import { Router } from 'express';

import db from '../../config/db/models';

import { ApiError } from '../../helpers/error';
import responseHandler from '../../helpers/response';

import { jwtService } from '../../libs/';

import CategoryController from './controllers';
import CategoryRouter from './router';
import CategoryService from './services';
import CategoryRepository from './repository';

import AuthMiddleWare from '../../middlewares/auth';

const Category = require('./categoryDao');

const router = Router();

const categoryDao = Category(db.sequelize, db.Sequelize.DataTypes);

const auth = new AuthMiddleWare({
  jwtService,
  ApiError
});

const categoryRepository = new CategoryRepository({
  categoryDao,
  ApiError
});

const categoryService = new CategoryService({
  categoryRepository,
  ApiError
});

const categoryController = new CategoryController({
  categoryService,
  responseHandler
});

const categoryRouter = new CategoryRouter({
  router,
  auth,
  categoryController,
  responseHandler
});

export default categoryRouter;
