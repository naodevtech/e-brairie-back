class GenreRouter {
  constructor({ router, genreController }) {
    this.router = router;
    this.initializeRoutes({ genreController });
    return this.router;
  }

  initializeRoutes({ genreController }) {
    this.router.route('/genres').get(genreController.getAll);
  }
}

export default GenreRouter;
