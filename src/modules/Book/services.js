import BookEntity from './entity';

class BookService {
  constructor({ bookRepository, ApiError }) {
    this.bookRepository = bookRepository;
    this.apiError = ApiError;
  }

  async getAllBooks() {
    return await this.bookRepository.getBooks();
  }

  async getBook(id) {
    return await this.bookRepository.getBookById(id);
  }

  async addBook(bookData) {
    const bookEntity = new BookEntity(bookData);
    if (!bookEntity.validate()) {
      throw new this.apiError(400, 'Veuillez remplir les champs manquant 😣');
    }
    return await this.bookRepository.createBook(bookData);
  }

  async updateBook(id, book) {
    return await this.bookRepository.updateBookById(id, book);
  }

  async deleteBook(id) {
    return await this.bookRepository.deleteBookById(id);
  }
}

export default BookService;
