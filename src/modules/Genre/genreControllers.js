class GenreController {
  constructor({ genreService, responseHandler }) {
    this.genreService = genreService;
    this.responseHandler = responseHandler;
  }

  getAllGenres = async (request, response, next) => {
    try {
      let genres = await this.genreService.getAllGenres();
      this.responseHandler(response, 201, genres, `Toutes les genres 💥`);
    } catch (err) {
      next(err);
    }
  };

  getGenre = async (request, response, next) => {
    try {
      let genre = await this.genreService.getGenre(request.params.id);
      this.responseHandler(response, 201, genre);
    } catch (err) {
      next(err);
    }
  };

  addGenre = async (request, response, next) => {
    try {
      let genre = await this.genreService.addGenre({
        ...request.body
      });
      this.responseHandler(response, 201, genre, `Genre ajouté ! 💥`);
    } catch (err) {
      next(err);
    }
  };

  updateGenre = async (request, response, next) => {
    try {
      let genre = await this.genreService.updateGenre(
        request.params.id,
        request.body.name
      );
      this.responseHandler(response, 201, genre);
    } catch (err) {
      next(err);
    }
  };

  deleteGenre = async (request, response, next) => {
    try {
      let genre = await this.genreService.deleteGenre(request.params.id);
      this.responseHandler(response, 201, genre);
    } catch (err) {
      next(err);
    }
  };
}

export default GenreController;
