import LocationEntity from './locationEntity';

class LocationService {
  constructor({ locationRepository, ApiError }) {
    this.locationRepository = locationRepository;
    this.apiError = ApiError;
  }

  async getAllLocations() {
    return await this.locationRepository.getLocations();
  }

  async getLocation(id) {
    return await this.locationRepository.getLocationById(id);
  }

  async addLocation(locationData) {
    const locationEntity = new LocationEntity(locationData);
    if (!locationEntity.validate()) {
      throw new this.apiError(
        400,
        'Veuillez remplir tous les champs requis 😣'
      );
    }
    return await this.locationRepository.createLocation(locationData);
  }

  async updateLocation(id, location) {
    return await this.locationRepository.updateLocationById(id, location);
  }

  async deleteLocation(id) {
    return await this.locationRepository.deleteLocationById(id);
  }
}

export default LocationService;
