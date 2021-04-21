class UserController {
  constructor({ userService, bcrypt, responseHandler }) {
    this.userService = userService;
    this.bcrypt = bcrypt;
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
    console.log('login');
  };
}

export default UserController;
