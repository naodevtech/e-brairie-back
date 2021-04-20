class Server {
  constructor({ express, routes, swaggerUi, swaggerOptions, errorHandler }) {
    this.app = express();
    this.initializeBodyParsing(express);
    this.initializeApplicationRouter(routes);
    this.initializeErrorHandler(errorHandler);
    this.initializeApplicationSwagger(swaggerUi, swaggerOptions);
  }

  initializeBodyParsing(express) {
    this.app.use(express.json());
  }

  initializeApplicationRouter(routes) {
    this.app.use(routes);
  }

  initializeApplicationSwagger(swaggerUi, swaggerOptions) {
    this.app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerOptions));
  }

  initializeErrorHandler(errorHandler) {
    this.app.use(errorHandler());
  }

  listen(app_port) {
    this.app.listen(app_port, () =>
      console.log(`application started on port : ${app_port}`)
    );
  }
}

export default Server;
