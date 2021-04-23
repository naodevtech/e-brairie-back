class BookController {
  constructor({ bookService, responseHandler }) {
    this.bookService = bookService;
    this.responseHandler = responseHandler;
  }

  getAllBooks = async (request, response, next) => {
    try {
      let books = await this.bookService.getAllBooks();
      this.responseHandler(response, 201, books, `Tous les livres 💥`);
    } catch (err) {
      next(err);
    }
  };

  getBook = async (request, response, next) => {
    try {
      let book = await this.bookService.getBook(request.params.id);
      this.responseHandler(response, 201, book);
    } catch (err) {
      next(err);
    }
  };

  addBook = async (request, response, next) => {
    try {
      let book = await this.bookService.addBook({ ...request.body });
      this.responseHandler(response, 201, book, `Nouveau livre ajouté ! 💥`);
    } catch (err) {
      next(err);
    }
  };

  updateBook = async (request, response, next) => {
    try {
      let book = await this.bookService.updateBook(request.params.id, {
        ...request.body
      });
      this.responseHandler(response, 201, 'Livre mis à jour 💥');
    } catch (err) {
      next(err);
    }
  };

  deleteBook = async (request, response, next) => {
    try {
      let book = await this.bookService.deleteBook(request.params.id);
      this.responseHandler(response, 201, `Le livre à bien été supprimé 💥`);
    } catch (err) {
      next(err);
    }
  };
}

export default BookController;
