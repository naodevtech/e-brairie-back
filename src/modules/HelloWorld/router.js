export default class HelloWordRouter {
  constructor({ router }) {
    this.router = router;
    this.initializeRoutes();
    return this.router;
  }

  initializeRoutes() {
    this.router.route('/').get((request, response) => {
      return response.send('Hello world');
    });
  }
}
