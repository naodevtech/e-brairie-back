import AuthorEntity from './entity';

class AuthorService {
  constructor({ authorRepository, ApiError }) {
    this.authorRepository = authorRepository;
    this.apiError = ApiError;
  }

  async addAuthor(authorData) {
    const authorEntity = new AuthorEntity(authorData);
    if (!authorEntity.validate()) {
      throw new this.apiError(400, "Veuillez remplir le nom de l'auteur 😣");
    }
    return await this.authorRepository.createAuthor(authorData);
  }

  async getAllAuthors() {
    return await this.authorRepository.getAuthors();
  }

  async getAuthor(id) {
    return await this.authorRepository.getAuthorById(id);
  }

  async updateAuthor(id, name) {
    return await this.authorRepository.updateAuthorById(id, name);
  }

  async deleteAuthor(id) {
    return await this.authorRepository.deleteAuthorById(id);
  }
}

export default AuthorService;
