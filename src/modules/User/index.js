import { Router } from 'express';
import bcrypt from 'bcrypt';

import db from '../../config/db/models';

import UserController from './controller';
import UserRouter from './router';
import UserService from './service';
import UserRepository from './repository';

import { jwtService } from '../../libs/';

import { ApiError } from '../../helpers/error';
import responseHandler from '../../helpers/response';

const User = require('./userDao');

const router = Router();

const userDao = User(db.sequelize, db.Sequelize.DataTypes);

const userRepository = new UserRepository({ userDao, bcrypt, ApiError });
const userService = new UserService({ userRepository, ApiError });

const userController = new UserController({
  userService,
  jwt: jwtService,
  responseHandler
});

const userRouter = new UserRouter({
  router,
  userController
});

export default userRouter;
