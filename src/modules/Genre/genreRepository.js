class GenreRepository {
  constructor({ genreDao, ApiError }) {
    this.genreDao = genreDao;
    this.apiError = ApiError;
  }

  async getGenres() {
    const genres = await this.genreDao.findAll();
    if (!genres) {
      throw new this.apiError(400, "Il semble qu'il n'y ai aucun genres 😖");
    }
    return genres;
  }

  async getGenreById(id) {
    const genre = await this.genreDao.findOne({
      where: { id: id }
    });
    if (!genre) {
      throw new this.apiError(
        400,
        "Il semble qu'il n'y ai aucun genre sous cet ID'😖"
      );
    }
    return genre;
  }

  async createGenre(genre) {
    const genreExist = await this.genreDao.findOne({
      where: { name: genre.name }
    });
    if (genreExist) {
      throw new this.apiError(
        400,
        "Il semble que le genre que vous tentez d'ajouter existe déjà sous le même nom 😖"
      );
    }
    return await this.genreDao.create(genre);
  }

  async updateGenreById(id, name) {
    const genreExist = await this.genreDao.findOne({
      where: { id: id }
    });
    if (genreExist) {
      const genre = await this.genreDao.update(
        { name: name },
        {
          where: {
            id: id
          }
        }
      );
      if (!genre) {
        throw new this.apiError(
          500,
          "Il semble qu'il n'y ai un problème lors de la modification du genre'😖"
        );
      } else {
        return genre;
      }
    } else {
      throw new this.apiError(
        400,
        "Il semble qu'il n'y ai pas de genre sous cet ID à modifier 😖"
      );
    }
  }

  async deleteGenreById(id) {
    const genreExist = await this.genreDao.findOne({
      where: { id: id }
    });
    if (genreExist) {
      const genre = await this.genreDao.destroy({
        where: { id: id }
      });
      if (!genre) {
        throw new this.apiError(
          400,
          "Il semble qu'il n'y ai aucun genre à supprimer avec cet ID '😖"
        );
      }
      return genre;
    }
  }
}

export default GenreRepository;
