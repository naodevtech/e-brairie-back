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

  async checkCredentials(email, password) {
    const userExist = await this.userDao.findOne({ where: { email: email } });
    if (!userExist) {
      throw new this.apiError(
        400,
        'Il ne semble pas y avoir de compte sous cet adresse-email 😖'
      );
    } else {
      let checkPassword = await this.bcrypt.compareSync(
        password,
        userExist.password
      );
      if (!checkPassword) {
        throw new this.apiError(400, 'Mot de passe incorrect😖');
      }
      return userExist;
    }
  }
}

export default UserRepository;
