class UserRepository {
  constructor({ userDao, bcrypt, ApiError }) {
    this.userDao = userDao;
    this.bcrypt = bcrypt;
    this.apiError = ApiError;
  }

  async createUser(userData) {
    const salt = this.bcrypt.genSaltSync(10);
    userData.password = this.bcrypt.hashSync(userData.password, salt);
    const userExist = await this.userDao.findOne({
      where: { email: userData.email }
    });
    if (userExist) {
      throw new this.apiError(
        400,
        'Un utilisateur existe déjà sous cet adresse e-mail 😖'
      );
    } else {
      return await this.userDao.create(userData);
    }
  }
}

export default UserRepository;
