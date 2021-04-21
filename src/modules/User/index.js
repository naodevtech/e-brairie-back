import { Router } from 'express';
import bcrypt from 'bcrypt';

import db from '../../config/db/models';
import User from './userDao';
import UserController from './controller';
import UserRouter from './router';
import UserService from './service';
import UserRepository from './repository';
import { ApiError } from '../../helpers/error';
import responseHandler from '../../helpers/response';

const router = Router();

const userDao = User.init(db.sequelize, db.Sequelize.DataTypes);

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
