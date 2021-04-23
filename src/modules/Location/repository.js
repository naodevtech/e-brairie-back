class LocationRepository {
  constructor({ locationDao, ApiError }) {
    this.locationDao = locationDao;
    this.apiError = ApiError;
  }

  async getLocations() {
    const locations = await this.locationDao.findAll();
    if (!locations) {
      throw new this.apiError(
        400,
        "Il semble qu'il n'y a aucun emplacements enregistré'😖"
      );
    }
    return locations;
  }

  async getLocationById(id) {
    const location = await this.locationDao.findOne({
      where: { id: id }
    });
    if (!location) {
      throw new this.apiError(
        400,
        "Il semble qu'il n'y ai aucun emplacement sous cet ID'😖"
      );
    }
    return location;
  }

  async createLocation(location) {
    const locationExist = await this.locationDao.findOne({
      where: {
        categoryId: location.categoryId,
        floor: location.floor,
        place: location.place,
        shelf: location.shelf
      }
    });
    if (locationExist) {
      throw new this.apiError(
        400,
        "Il semble que l'emplacement que vous tentez d'ajouter existe déjà sous le même nom 😖"
      );
    }
    return await this.locationDao.create(location);
  }

  async updateLocationById(id, locationData) {
    const locationExist = await this.locationDao.findOne({
      where: { id: id }
    });
    if (locationExist) {
      const location = await this.locationDao.update(
        {
          categoryId: locationData.categoryId,
          floor: locationData.floor,
          place: locationData.place,
          shelf: locationData.shelf
        },
        {
          where: {
            id: id
          }
        }
      );
      if (!location) {
        throw new this.apiError(
          500,
          "Il semble qu'il n'y ai un problème lors de la modification de l'emplacement'😖"
        );
      } else {
        return location;
      }
    } else {
      throw new this.apiError(
        400,
        "Il semble qu'il n'y ai pas d'emplacement sous cet ID à modifier 😖"
      );
    }
  }
  async deleteLocationById(id) {
    const locationExist = await this.locationDao.findOne({
      where: { id: id }
    });
    if (locationExist) {
      const location = await this.locationDao.destroy({
        where: { id: id }
      });
      if (!location) {
        throw new this.apiError(
          400,
          "Il semble qu'il n'y ai aucun emplacement à supprimer avec cet ID '😖"
        );
      }
      return location;
    }
  }
}

export default LocationRepository;
