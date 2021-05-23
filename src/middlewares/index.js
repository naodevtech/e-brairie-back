import AuthMiddleware from './auth';
import csrf from './csrf';
import { jwtService } from '../libs';

const auth = new AuthMiddleware(jwtService);

export { auth, csrf };
