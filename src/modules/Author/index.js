import { Router } from 'express';

import db from '../../config/db/models';

import { ApiError } from '../../helpers/error';
import responseHandler from '../../helpers/response';

import AuthorController from './controllers';
import AuthorRouter from './router';
import AuthorService from './services';
import AuthorRepository from './repository';

const Author = require('./authorDao');

const router = Router();

const authorDao = Author(db.sequelize, db.Sequelize.DataTypes);

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
  authorController,
  responseHandler
});

export default authorRouter;
