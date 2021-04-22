class AuthorController {
  constructor({ authorService, responseHandler }) {
    this.authorService = authorService;
    this.responseHandler = responseHandler;
  }

  addAuthor = async (request, response, next) => {
    try {
      let author = await this.authorService.addAuthor({ ...request.body });
      this.responseHandler(response, 201, author, `Auteur ajouté ! 💥`);
    } catch (err) {
      next(err);
    }
  };

  getAllAuthors = async (request, response, next) => {
    try {
      let author = await this.authorService.getAllAuthors();
      this.responseHandler(response, 201, author, `Tous les auteurs 💥`);
    } catch (err) {
      next(err);
    }
  };

  getAuthor = async (request, response, next) => {
    try {
      let author = await this.authorService.getAuthor(request.params.id);
      this.responseHandler(response, 201, author);
    } catch (err) {
      next(err);
    }
  };

  updateAuthor = async (request, response, next) => {
    try {
      let author = await this.authorService.updateAuthor(
        request.params.id,
        request.body.name
      );
      this.responseHandler(response, 201, author);
    } catch (err) {
      next(err);
    }
  };

  deleteAuthor = async (request, response, next) => {
    try {
      let author = await this.authorService.deleteAuthor(request.params.id);
      this.responseHandler(response, 201, author);
    } catch (err) {
      next(err);
    }
  };
}

export default AuthorController;
