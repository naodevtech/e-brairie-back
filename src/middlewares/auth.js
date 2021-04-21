class AuthMiddleWare {
  constructor({ jwtService, errorHandler }) {
    this.jwt = jwt;
    this.errorHandler = errorHandler;
  }

  isAuthentificated = async (request, response, next) => {
    try {
      const token = request.cookies['auth-cookie'];

      if (!token) {
        return this.errorHandler(
          401,
          'Votre session a expirée. Veuillez vous reconnecter 😣'
        );
      }

      const decoded = await this.jwt.decodeToken(token);

      request.currentUserId = decoded.id;
      next();
    } catch (err) {
      next(err);
    }
  };

  isAdmin = async (request, response, next) => {
    try {
      const decoded = await this.jwt.decodeToken(token);
      if (decoded.role === 'admin') {
        next();
      }
    } catch (err) {
      next(err);
    }
  };
}

export default AuthMiddleWare;
