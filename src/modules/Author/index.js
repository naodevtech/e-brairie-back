import { Router } from 'express';
import jwt from 'jsonwebtoken';

import db from '../../config/db/models';

import { ApiError } from '../../helpers/error';
import responseHandler from '../../helpers/response';
import { handleError } from '../../helpers/error';

import { jwtService } from '../../libs/';

import AuthorController from './controllers';
import AuthorRouter from './router';
import AuthorService from './services';
import AuthorRepository from './repository';

import AuthMiddleWare from '../../middlewares/auth';

const Author = require('./authorDao');

const router = Router();

const authorDao = Author(db.sequelize, db.Sequelize.DataTypes);

const auth = new AuthMiddleWare({
  jwtService,
  ApiError
});

const authorRepository = new AuthorRepository({
  authorDao,
  ApiError
});
const authorService = new AuthorService({
  authorRepository,
  ApiError
});

const authorController = new AuthorController({
  authorService,
  responseHandler
});

const authorRouter = new AuthorRouter({
  router,
  auth,
  authorController,
  responseHandler
});

export default authorRouter;
