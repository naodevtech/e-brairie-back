class RentRouter {
  constructor({ router, auth, rentController }) {
    this.router = router;
    this.initializeRoutes({ rentController, auth });
    return this.router;
  }

  initializeRoutes({ rentController, auth }) {
    console.log('rent router');
    // this.router
    //   .route('/rents')
    //   .get(auth.isAuthentificated, rentController.getAllRents);
    this.router
      .route('/rents/users/:id')
      .get(auth.isAuthentificated, rentController.getRentsByUserId);
    this.router
      .route('/rents/:id')
      .get(auth.isAuthentificated, rentController.getRent);
    this.router
      .route('/rents/:id')
      .post(auth.isAuthentificated, rentController.addRent);
    this.router
      .route('/rents/:id')
      .patch(auth.isAdmin, rentController.updateRent);
    this.router
      .route('/rents/:id')
      .delete(auth.isAdmin, rentController.deleteRent);
  }
}

export default RentRouter;
