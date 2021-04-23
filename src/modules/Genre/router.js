class GenreRouter {
  constructor({ router, auth, genreController }) {
    this.router = router;
    this.initializeRoutes({ genreController, auth });
    return this.router;
  }
  initializeRoutes({ genreController, auth }) {
    this.router
      .route('/genres')
      .get(auth.isAuthentificated, genreController.getAllGenres);
    this.router
      .route('/genres/:id')
      .get(auth.isAuthentificated, genreController.getGenre);
    this.router.route('/genres').post(auth.isAdmin, genreController.addGenre);
    this.router
      .route('/genres/:id')
      .put(auth.isAdmin, genreController.updateGenre);
    this.router
      .route('/genres/:id')
      .delete(auth.isAdmin, genreController.deleteGenre);
  }
}

export default GenreRouter;
