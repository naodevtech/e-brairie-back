class CategoryRouter {
  constructor({ router, auth, categoryController }) {
    this.router = router;
    this.initializeRoutes({ categoryController, auth });
    return this.router;
  }

  initializeRoutes({ categoryController, auth }) {
    console.log('CategoryRouter >');
    this.router
      .route('/categories')
      .get(auth.isAuthentificated, categoryController.getAllCategories);
    this.router
      .route('/categories/:id')
      .get(auth.isAuthentificated, categoryController.getCategory);
    this.router
      .route('/categories')
      .post(auth.isAdmin, categoryController.addCategory);
    this.router
      .route('/categories/:id')
      .put(auth.isAdmin, categoryController.updateCategory);
    this.router
      .route('/categories/:id')
      .delete(auth.isAdmin, categoryController.deleteCategory);
  }
}

export default CategoryRouter;
