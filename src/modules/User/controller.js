class UserController {
  constructor({ userService, jwt, responseHandler }) {
    this.userService = userService;
    this.jwt = jwt;
    this.responseHandler = responseHandler;
  }

  register = async (request, response, next) => {
    try {
      let user = await this.userService.register({ ...request.body });
      this.responseHandler(response, 201, user, 'user registred');
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
      console.log(token);
      response.cookie('auth-cookie', token, { maxAge: 900000, httpOnly: true });
      this.responseHandler(
        response,
        200,
        { email: user.dataValues.email, role: user.dataValues.role, token },
        `Bonjour ${user.dataValues.name} 💥`
      );
    } catch (err) {
      next(err);
    }
  };

  logout = async (request, response, next) => {
    try {
      response.clearCookie('auth-cookie');
      this.responseHandler(response, 200, 'User deconnected');
    } catch (err) {
      next(err);
    }
  };
}

export default UserController;
