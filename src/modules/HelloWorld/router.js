// import ErrorHandler from '../../libs/ErrorHandler';

export default class HelloWordRouter {
  constructor({ router, errorNotification }) {
    this.router = router;
    this.errorNotification = errorNotification;
    this.initializeRoutes();
    return this.router;
  }

  initializeRoutes() {
    console.log('hello');
    this.router.route('/').get((request, response, next) => {
      this.errorNotification(response, 401, 'shabbat shalom');
    });
  }
}
