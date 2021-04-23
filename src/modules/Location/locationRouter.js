class LocationRouter {
  constructor({ router, auth, locationController }) {
    this.router = router;
    this.initializeRoutes({ locationController, auth });
    return this.router;
  }

  initializeRoutes({ locationController, auth }) {
    console.log('LocationRouter >');
    this.router
      .route('/locations')
      .get(auth.isAuthentificated, locationController.getAllLocations);
    this.router
      .route('/locations/:id')
      .get(auth.isAuthentificated, locationController.getLocation);
    this.router
      .route('/locations')
      .post(auth.isAdmin, locationController.addLocation);
    this.router
      .route('/locations/:id')
      .patch(auth.isAdmin, locationController.updateLocation);
    this.router
      .route('/locations/:id')
      .delete(auth.isAdmin, locationController.deleteLocation);
  }
}

export default LocationRouter;
