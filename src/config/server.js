class Server {
  constructor({ express, routes }) {
    this.app = express();
    this.initializeBodyParsing(express);
    this.initializeApplicationRouter(routes);
  }

  initializeBodyParsing(express) {
    this.app.use(express.json());
  }

  initializeApplicationRouter(routes) {
    this.app.use(routes);
  }

  listen(app_port) {
    this.app.listen(app_port, () =>
      console.log(`application started on port : ${app_port}`)
    );
  }
}

export default Server;
