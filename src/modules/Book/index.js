import { Router } from 'express';

import db from '../../config/db/models';

import { ApiError } from '../../helpers/error';
import responseHandler from '../../helpers/response';

import { jwtService } from '../../libs/';

import BookController from './controllers';
import BookRouter from './router';
import BookService from './services';
import BookRepository from './repository';

import AuthMiddleWare from '../../middlewares/auth';

const Book = require('./bookDao');
const Author = require('../Author/authorDao');

const router = Router();

const bookDao = Book(db.sequelize, db.Sequelize.DataTypes);
const authorDao = Author(db.sequelize, db.Sequelize.DataTypes);

const auth = new AuthMiddleWare({
  jwtService,
  ApiError
});

const bookRepository = new BookRepository({
  bookDao,
  authorDao,
  ApiError
});

const bookService = new BookService({
  bookRepository,

  ApiError
});

const bookController = new BookController({
  bookService,
  responseHandler
});

const bookRouter = new BookRouter({
  router,
  auth,
  bookController,
  responseHandler
});

export default bookRouter;
