class AuthMiddleWare {
  constructor({ jwtService, ApiError }) {
    this.jwt = jwtService;
    this.apiError = ApiError;
  }

  isAuthentificated = async (request, response, next) => {
    try {
      const token = request.cookies['auth-cookie'];
      console.log(token);
      if (!token) {
        throw new this.apiError(
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
      const token = request.cookies['auth-cookie'];
      const decoded = await this.jwt.decodeToken(token);
      if (decoded.data.role != 'admin') {
        throw new this.apiError(
          401,
          "Vous n'avez pas les droits administrateur pour effectuer cette requête 😣"
        );
      }
      request.currentUserId = decoded.id;
      next();
    } catch (err) {
      next(err);
    }
  };
}

export default AuthMiddleWare;
