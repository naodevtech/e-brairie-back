import { Router } from 'express';
import { DataTypes } from 'sequelize';
import bcrypt from 'bcrypt';

import db from '../../config/db/database';
import User from './dao';
import UserController from './controller';
import UserRouter from './router';
import UserService from './service';
import UserRepository from './repository';
import { ApiError } from '../../helpers/error';
import responseHandler from '../../helpers/response';

const router = Router();

const userDao = User.init(db.sequelize, DataTypes);

const userRepository = new UserRepository({ userDao, bcrypt, ApiError });
const userService = new UserService({ userRepository, ApiError });

const userController = new UserController({
  userService,
  responseHandler
});

const userRouter = new UserRouter({
  router,
  userController
});

export default userRouter;
