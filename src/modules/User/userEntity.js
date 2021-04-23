class UserEntity {
  constructor({ role, name, email, password }) {
    this.role = role;
    this.name = name;
    this.email = email;
    this.password = password;
  }

  validate() {
    if (!this.name || !this.email || !this.password) {
      return false;
    } else {
      return true;
    }
  }

  checkEmail() {
    const emailRegexp = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (!emailRegexp.test(this.email)) {
      return false;
    } else {
      return true;
    }
  }

  checkPassword() {
    const passwordRegexp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;

    if (!passwordRegexp.test(this.password)) {
      return false;
    } else {
      return true;
    }
  }
}

export default UserEntity;
