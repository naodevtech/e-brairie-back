class AuthorRouter {
  constructor({ router, auth, authorController }) {
    this.router = router;
    this.initializeRoutes({ authorController });
    return this.router;
  }

  initializeRoutes({ authorController }) {
    console.log('AuthorsRouter >');
    this.router.route('/authors').get(authorController.getAllAuthors);
    this.router.route('/authors/:id').get(authorController.getAuthor);
    this.router.route('/authors/:id').put(authorController.updateAuthor);
    this.router.route('/authors/:id').delete(authorController.deleteAuthor);
    this.router.route('/authors').post(authorController.addAuthor);
  }
}
export default AuthorRouter;
