class Server {
  constructor({ express, cors, routes, cookieParser, handleError }) {
    this.app = express();
    this.initializeBodyParsing(express);
    this.initializeMiddlewares({ cookieParser });
    this.initializeApplicationCors(cors);
    this.initializeApplicationRouter(routes);
    this.app.use((err, request, response, next) => {
      handleError(err, response);
    });
  }

  initializeBodyParsing(express) {
    this.app.use(express.json());
  }

  initializeApplicationCors(cors) {
    this.app.use(cors({ credentials: true, origin: 'http://localhost:3001' }));
  }

  initializeApplicationRouter(routes) {
    this.app.use(routes);
  }

  initializeMiddlewares({ cookieParser }) {
    this.app.use(cookieParser());
  }

  listen(app_port) {
    this.app.listen(app_port, () =>
      console.log(`application started on port : ${app_port}`)
    );
  }
}

export default Server;
