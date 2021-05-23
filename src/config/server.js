class Server {
  constructor({ express, cors, routes, cookieParser, csrf, handleError }) {
    this.app = express();
    this.initializeBodyParsing(express);
    this.initializeMiddlewares({ cookieParser, csrf });
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
    this.app.use(cors({ credentials: true, origin: 'http://localhost:3000' }));
  }

  initializeMiddlewares({ cookieParser, csrf }) {
    this.app.use(cookieParser());
    this.app.get('/csrf', csrf, (req, res) => {
      res.status(200).json(req.csrfToken());
    });
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
