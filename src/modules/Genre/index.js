import { Router } from 'express';

import db from '../../config/db/models';

import { ApiError } from '../../helpers/error';
import responseHandler from '../../helpers/response';

import { jwtService } from '../../libs/';

import GenreController from './controllers';
import GenreRouter from './router';
import GenreService from './services';
import GenreRepository from './repository';

import AuthMiddleWare from '../../middlewares/auth';

const Genre = require('./genreDao');

const router = Router();

const genreDao = Genre(db.sequelize, db.Sequelize.DataTypes);

const auth = new AuthMiddleWare({
  jwtService,
  ApiError
});

const genreRepository = new GenreRepository({
  genreDao,
  ApiError
});

const genreService = new GenreService({
  genreRepository,
  ApiError
});

const genreController = new GenreController({
  genreService,
  responseHandler
});

const genreRouter = new GenreRouter({
  router,
  auth,
  genreController,
  responseHandler
});

export default genreRouter;
