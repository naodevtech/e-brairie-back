class BookRepository {
  constructor({ bookDao, authorDao, categoryGenreDao, ApiError }) {
    this.bookDao = bookDao;
    this.authorDao = authorDao;
    this.categoryGenreDao = categoryGenreDao;
    this.apiError = ApiError;
  }

  async getBooks() {
    const books = await this.bookDao.findAll();
    if (!books) {
      throw new this.apiError(400, "Il semble qu'il n'y a aucun livres'😖");
    }
    return books;
  }

  async getBookById(id) {
    const book = await this.bookDao.findOne({
      where: { id: id }
    });
    if (!book) {
      throw new this.apiError(
        400,
        "Il semble qu'il n'y ai aucun livre à cet ID'😖"
      );
    }
    return book;
  }

  async createBook(book) {
    const authorExist = await this.authorDao.findOne({
      where: { id: book.authorId }
    });
    if (!authorExist) {
      throw new this.apiError(
        400,
        'Veuillez selectionner un auteur ou en créer un 😖'
      );
    }
    const bookExist = await this.bookDao.findOne({
      where: { title: book.title }
    });
    if (bookExist) {
      throw new this.apiError(
        400,
        "Il semble que le livre que vous tentez d'ajouter existe déjà sous le même nom 😖"
      );
    }
    return await this.bookDao.create(book);
  }

  async updateBookById(id, bookData) {
    const bookExist = await this.bookDao.findOne({
      where: { id: id }
    });
    if (bookExist) {
      const book = await this.bookDao.update(
        {
          title: bookData.title,
          description: bookData.description,
          amount: bookData.amount
        },
        {
          where: {
            id: id
          }
        }
      );
      if (!book) {
        throw new this.apiError(
          500,
          "Il semble qu'il n'y ai un problème lors de la modification du livre😖"
        );
      } else {
        return book;
      }
    } else {
      throw new this.apiError(
        400,
        "Il semble qu'il n'y ai pas de livre sous cet ID à modifier 😖"
      );
    }
  }

  async deleteBookById(id) {
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

  async getGenresByCategoryId(id) {
    const genres = await this.categoryGenreDao.findAll({
      where: { categoryId: id }
    });
    if (!genres || genres.length === 0) {
      throw new this.apiError(
        400,
        "Il semble qu'il n'y ai aucuns genres associés à l'ID de la catégorie'😖"
      );
    }
    return genres;
  }
}

export default BookRepository;
