class GenreEntity {
  constructor({ name }) {
    this.name = name;
  }

  validate() {
    if (!this.name) {
      return false;
    } else {
      return true;
    }
  }
}

export default GenreEntity;
