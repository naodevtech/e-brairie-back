class CategoryRepository {
  constructor({ categoryDao, ApiError }) {
    this.categoryDao = categoryDao;
    this.apiError = ApiError;
  }

  async getCategories() {
    const categories = await this.categoryDao.findAll();
    if (!categories) {
      throw new this.apiError(
        400,
        "Il semble qu'il n'y ai aucunes catégories'😖"
      );
    }
    return categories;
  }

  async getCategoryById(id) {
    const category = await this.categoryDao.findOne({
      where: { id: id }
    });
    if (!category) {
      throw new this.apiError(
        400,
        "Il semble qu'il n'y ai aucune catégorie sous cet ID'😖"
      );
    }
    return category;
  }

  async createCategory(category) {
    const categoryExist = await this.categoryDao.findOne({
      where: { name: category.name }
    });
    if (categoryExist) {
      throw new this.apiError(
        400,
        "Il semble que la catégorie que vous tentez d'ajouter existe déjà sous le même nom 😖"
      );
    }
    return await this.categoryDao.create(category);
  }

  async updateCategoryById(id, name) {
    const categoryExist = await this.categoryDao.findOne({
      where: { id: id }
    });
    if (categoryExist) {
      const category = await this.categoryDao.update(
        { name: name },
        {
          where: {
            id: id
          }
        }
      );
      if (!category) {
        throw new this.apiError(
          500,
          "Il semble qu'il n'y ai un problème lors de la modification de la catégorie'😖"
        );
      } else {
        return category;
      }
    } else {
      throw new this.apiError(
        400,
        "Il semble qu'il n'y ai pas de catégorie sous cet ID à modifier 😖"
      );
    }
  }

  async deleteCategoryById(id) {
    const categoryExist = await this.categoryDao.findOne({
      where: { id: id }
    });
    if (categoryExist) {
      const category = await this.categoryDao.destroy({
        where: { id: id }
      });
      if (!category) {
        throw new this.apiError(
          400,
          "Il semble qu'il n'y ai aucune catégorie à supprimer avec cet ID '😖"
        );
      }
      return category;
    }
  }
}

export default CategoryRepository;
