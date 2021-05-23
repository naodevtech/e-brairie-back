class RentEntity {
  constructor({ id }) {
    this.id = id;
  }

  validate() {
    if (!this.id) {
      return false;
    } else {
      return true;
    }
  }
}

export default RentEntity;
