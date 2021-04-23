import CategoryEntity from './categoryEntity';

class CategoryService {
  constructor({ categoryRepository, ApiError }) {
    this.categoryRepository = categoryRepository;
    this.apiError = ApiError;
  }

  async getAllCategories() {
    return await this.categoryRepository.getCategories();
  }

  async getCategory(id) {
    return await this.categoryRepository.getCategoryById(id);
  }

  async addCategory(categoryData) {
    const categoryEntity = new CategoryEntity(categoryData);
    if (!categoryEntity.validate()) {
      throw new this.apiError(
        400,
        'Veuillez remplir le nom de la catégorie 😣'
      );
    }
    return await this.categoryRepository.createCategory(categoryData);
  }

  async updateCategory(id, name) {
    return await this.categoryRepository.updateCategoryById(id, name);
  }

  async deleteCategory(id) {
    return await this.categoryRepository.deleteCategoryById(id);
  }
}

export default CategoryService;
