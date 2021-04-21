class UserRepository {
  constructor({ userDao, bcrypt }) {
    this.userDao = userDao;
    this.bcrypt = bcrypt;
  }

  async createUser(userData) {
    const salt = this.bcrypt.genSaltSync(10);
    userData.password = this.bcrypt.hashSync(userData.password, salt);
    return await this.userDao.create(userData);
  }
}

export default UserRepository;
