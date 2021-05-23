import RentEntity from './entity';

class RentService {
  constructor({ rentRepository, ApiError }) {
    this.rentRepository = rentRepository;
    this.apiError = ApiError;
  }

  async getAllRents() {
    return await this.rentRepository.getRents();
  }

  async getRent(id) {
    return await this.rentRepository.getRentById(id);
  }

  async addRent(rentData) {
    // const rentEntity = new RentEntity(rentData);
    // if (!rentEntity.validate()) {
    //   throw new this.apiError(400, 'Veuillez remplir les champs manquant 😣');
    // }
    return await this.rentRepository.createRent(rentData);
  }

  async updateRent(id, rent) {
    return await this.rentRepository.updateRentById(id, rent);
  }

  async deleteRent(id) {
    return await this.rentRepository.deleteRentById(id);
  }

  async getRentsByUserId(id) {
    return await this.rentRepository.getRentsByUser(id);
  }
}

export default RentService;
