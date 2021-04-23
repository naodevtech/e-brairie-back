class BookRouter {
  constructor({ router, auth, bookController }) {
    this.router = router;
    this.initializeRoutes({ bookController, auth });
    return this.router;
  }

  initializeRoutes({ bookController, auth }) {
    console.log('BookRouter >');
    this.router
      .route('/books')
      .get(auth.isAuthentificated, bookController.getAllBooks);
    this.router
      .route('/books/:id')
      .get(auth.isAuthentificated, bookController.getBook);
    this.router.route('/books').post(auth.isAdmin, bookController.addBook);
    this.router
      .route('/books/:id')
      .patch(auth.isAdmin, bookController.updateBook);
    this.router
      .route('/books/:id')
      .delete(auth.isAdmin, bookController.deleteBook);
    this.router
      .route('/books/:categoryId/genres')
      .get(auth.isAuthentificated, bookController.getGenres);
  }
}

export default BookRouter;
