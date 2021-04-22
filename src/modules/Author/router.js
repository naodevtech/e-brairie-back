class AuthorRouter {
  constructor({ router, auth, authorController }) {
    this.router = router;
    this.initializeRoutes({ authorController, auth });
    return this.router;
  }

  initializeRoutes({ authorController, auth }) {
    console.log('AuthorsRouter >');
    this.router
      .route('/authors')
      .get(auth.isAuthentificated, authorController.getAllAuthors);
    this.router
      .route('/authors/:id')
      .get(auth.isAuthentificated, authorController.getAuthor);
    this.router
      .route('/authors/:id')
      .put(auth.isAdmin, authorController.updateAuthor);
    this.router
      .route('/authors/:id')
      .delete(auth.isAdmin, authorController.deleteAuthor);
    this.router
      .route('/authors')
      .post(auth.isAdmin, authorController.addAuthor);
  }
}
export default AuthorRouter;
