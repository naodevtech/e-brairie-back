class LocationController {
  constructor({ locationService, responseHandler }) {
    this.locationService = locationService;
    this.responseHandler = responseHandler;
  }

  getAllLocations = async (request, response, next) => {
    try {
      let locations = await this.locationService.getAllLocations();
      this.responseHandler(
        response,
        201,
        locations,
        `Tous les emplacements 💥`
      );
    } catch (err) {
      next(err);
    }
  };

  getLocation = async (request, response, next) => {
    try {
      let location = await this.locationService.getLocation(request.params.id);
      this.responseHandler(response, 201, location);
    } catch (err) {
      next(err);
    }
  };

  addLocation = async (request, response, next) => {
    try {
      let location = await this.locationService.addLocation({
        ...request.body
      });
      this.responseHandler(response, 201, location, `Catégorie ajouté ! 💥`);
    } catch (err) {
      next(err);
    }
  };

  updateLocation = async (request, response, next) => {
    try {
      let location = await this.locationService.updateLocation(
        request.params.id,
        { ...request.body }
      );
      this.responseHandler(response, 201, location);
    } catch (err) {
      next(err);
    }
  };

  deleteLocation = async (request, response, next) => {
    try {
      let location = await this.locationService.deleteLocation(
        request.params.id
      );
      this.responseHandler(
        response,
        201,
        location,
        `L'emplacement à bien été supprimé`
      );
    } catch (err) {
      next(err);
    }
  };
}

export default LocationController;
