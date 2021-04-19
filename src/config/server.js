class Server {
  constructor({ express, routes, swaggerUi, swaggerOptions }) {
    this.app = express();
    this.initializeBodyParsing(express);
    this.initializeApplicationRouter(routes);
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
  listen(app_port) {
    this.app.listen(app_port, () =>
      console.log(`application started on port : ${app_port}`)
    );
  }
}

export default Server;
