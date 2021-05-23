class RentRepository {
  constructor({ rentDao, bookDao, ApiError }) {
    this.rentDao = rentDao;
    this.bookDao = bookDao;
    this.apiError = ApiError;
  }

  async getRents() {
    const rents = await this.rentDao.findAll();
    if (!rents) {
      throw new this.apiError(
        400,
        "Il semble qu'il n'y a aucunes locations'😖"
      );
    }
    return rents;
  }

  async getRentById(id) {
    const rent = await this.rentDao.findOne({
      where: { id: id }
    });
    if (!rent) {
      throw new this.apiError(
        400,
        "Il semble qu'il n'y ai aucune location à cet ID'😖"
      );
    }
    return rent;
  }

  async createRent(rent) {
    console.log(rent);
    const bookExist = await this.bookDao.findOne({
      where: { id: rent.bookId }
    });
    if (!bookExist) {
      throw new this.apiError(
        400,
        'Veuillez selectionner un livre existant 😖'
      );
    }
    return await this.rentDao.create(rent);
  }

  async updateRentById(rentData, id) {
    const bookAvailable = await this.bookDao.findOne({
      where: { id: id }
    });
    if (bookAvailable) {
      const rent = await this.rentDao.update(
        { rentData },
        {
          where: {
            id: id
          }
        }
      );
      if (!rent) {
        throw new this.apiError(
          500,
          "Il semble qu'il n'y ai un problème lors de la modification de la location"
        );
      } else {
        return rent;
      }
    } else {
      throw new this.apiError(
        400,
        "Il semble qu'il n'y ai pas de location sous cet ID à modifier 😖"
      );
    }
  }

  async deleteRentById(id) {
    const bookExist = await this.bookDao.findOne({
      where: { id: id }
    });
    if (bookExist) {
      const book = await this.bookDao.destroy({
        where: { id: id }
      });
      if (!book) {
        throw new this.apiError(
          400,
          "Il semble qu'il n'y ai aucun livre à supprimer avec cet ID '😖"
        );
      }
      return book;
    }
  }

  async getRentsByUser(id) {
    const rents = await this.rentDao.findAll({
      where: { userId: id }
    });
    return rents;
  }
}

export default RentRepository;
