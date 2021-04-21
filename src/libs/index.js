import config from '../config/env';

import JwtService from './JwtService';

import jwt from 'jsonwebtoken';

const jwtService = new JwtService(jwt, config.jwt_secret);

export { jwtService };
