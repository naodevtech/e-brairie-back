class UserController {
  constructor({ userService, jwt, responseHandler }) {
    this.userService = userService;
    this.jwt = jwt;
    this.responseHandler = responseHandler;
  }

  register = async (request, response, next) => {
    try {
      let user = await this.userService.register({ ...request.body });
      let token = await this.jwt.generateToken({
        id: user.dataValues.id,
        email: user.dataValues.email,
        role: user.dataValues.role
      });
      response.cookie('auth-cookie', token, {
        httpOnly: true,
        secure: false,
        maxAge: 3600000
      });
      this.responseHandler(
        response,
        201,
        user,
        `Bonjour ${user.dataValues.name} 💥`
      );
    } catch (err) {
      next(err);
    }
  };

  login = async (request, response, next) => {
    try {
      let user = await this.userService.login(
        request.body.email,
        request.body.password
      );
      let token = await this.jwt.generateToken({
        id: user.dataValues.id,
        email: user.dataValues.email,
        role: user.dataValues.role
      });
      response.cookie('auth-cookie', token, {
        httpOnly: true,
        secure: false,
        maxAge: 3600000
      });
      this.responseHandler(
        response,
        200,
        {
          id: user.dataValues.id,
          name: user.dataValues.name,
          email: user.dataValues.email,
          role: user.dataValues.role,
          token
        },
        `Bonjour ${user.dataValues.name} 💥`
      );
    } catch (err) {
      next(err);
    }
  };

  logout = async (request, response, next) => {
    try {
      response.clearCookie('auth-cookie');
      this.responseHandler(response, 200, {}, 'User deconnected 🔐');
    } catch (err) {
      next(err);
    }
  };

  me = async (request, response, next) => {
    try {
      const token = await this.jwt.decodeToken(request.cookies['auth-cookie']);
      const user = await this.userService.me(token.id);
      console.log(user);
      this.responseHandler(
        response,
        200,
        user,
        'User connected with great ID 💥'
      );
    } catch (err) {
      next(err);
    }
  };
}

export default UserController;
