import GenreEntity from './entity';

class GenreService {
  constructor({ genreRepository, ApiError }) {
    this.genreRepository = genreRepository;
    this.apiError = ApiError;
  }

  async getAllGenres() {
    return await this.genreRepository.getGenres();
  }

  async getGenre(id) {
    return await this.genreRepository.getGenreById(id);
  }

  async addGenre(genreData) {
    const genreEntity = new GenreEntity(genreData);
    if (!genreEntity.validate()) {
      throw new this.apiError(400, 'Veuillez remplir le nom du genre 😣');
    }
    return await this.genreRepository.createGenre(genreData);
  }

  async updateGenre(id, name) {
    return await this.genreRepository.updateGenreById(id, name);
  }

  async deleteGenre(id) {
    return await this.genreRepository.deleteGenreById(id);
  }
}

export default GenreService;
