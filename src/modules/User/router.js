class UserRouter {
  constructor({ router, userController }) {
    this.router = router;
    this.initializeRoutes({ userController });
    return this.router;
  }

  initializeRoutes({ userController }) {
    this.router.route('/register').post(userController.register);
    this.router.route('/login').post(userController.login);
  }
}
export default UserRouter;
