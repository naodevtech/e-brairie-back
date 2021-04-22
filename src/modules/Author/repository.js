class AuthorRepository {
  constructor({ authorDao, ApiError }) {
    this.authorDao = authorDao;
    this.apiError = ApiError;
  }

  async createAuthor(author) {
    const authorExist = await this.authorDao.findOne({
      where: { name: author.name }
    });
    if (authorExist) {
      throw new this.apiError(
        400,
        "Il semble que l'auteur que vous tentez d'ajouter existe déjà sous le même nom 😖"
      );
    }
    return await this.authorDao.create(author);
  }

  async getAuthors() {
    const authors = await this.authorDao.findAll();
    if (!authors) {
      throw new this.apiError(400, "Il semble qu'il n'y ai aucun auteur'😖");
    }
    return authors;
  }

  async getAuthorById(id) {
    const author = await this.authorDao.findOne({
      where: { id: id }
    });
    if (!author) {
      throw new this.apiError(400, "Il semble qu'il n'y ai aucun auteur'😖");
    }
    return author;
  }

  async updateAuthorById(id, name) {
    const authorExist = await this.authorDao.findOne({
      where: { id: id }
    });
    if (authorExist) {
      const author = await this.authorDao.update(
        { name: name },
        {
          where: {
            id: id
          }
        }
      );
      console.log(author);
      if (!author) {
        throw new this.apiError(
          500,
          "Il semble qu'il n'y ai un problème lors de la modification'😖"
        );
      } else {
        return author;
      }
    } else {
      throw new this.apiError(
        400,
        "Il semble qu'il n'y ai pas d'auteur sous cet ID à modifier 😖"
      );
    }
  }

  async deleteAuthorById(id) {
    const authorExist = await this.authorDao.findOne({
      where: { id: id }
    });
    if (authorExist) {
      const author = await this.authorDao.destroy({
        where: { id: id }
      });
      if (!author) {
        throw new this.apiError(
          400,
          "Il semble qu'il n'y ai aucun auteur à supprimer avec cet ID '😖"
        );
      }
      return author;
    }
  }
}

export default AuthorRepository;
