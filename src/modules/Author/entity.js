class UserEntity {
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

export default UserEntity;
