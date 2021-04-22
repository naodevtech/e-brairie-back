import UserEntity from './entity';

class UserService {
  constructor({ userRepository, ApiError }) {
    this.userRepository = userRepository;
    this.apiError = ApiError;
  }

  async register(userData) {
    const userEntity = new UserEntity(userData);
    if (!userEntity.validate()) {
      throw new this.apiError(400, 'champs manquant');
    }
    if (!userEntity.checkEmail()) {
      throw new this.apiError(400, "l'email n'est pas dans le bon format 😖");
    }
    if (!userEntity.checkPassword()) {
      throw new this.apiError(
        400,
        'le mot de passe doit contenir entre 1 et 15 caractères, une majuscule, un chiffre et un caractère spécial 😖'
      );
    }
    return await this.userRepository.createUser(userEntity);
  }

  async login(email, password) {
    return await this.userRepository.checkCredentials(email, password);
  }
}

export default UserService;
