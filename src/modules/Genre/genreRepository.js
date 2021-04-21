export default class GenreRepository {
  constructor(genreDao) {
    this.genreDao = genreDao;
  }
  async getGenre() {
    const res = this.genreDao.findAll().then((data) => console.log(data));
  }
}
