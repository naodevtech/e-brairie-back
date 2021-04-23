class CategoryController {
  constructor({ categoryService, responseHandler }) {
    this.categoryService = categoryService;
    this.responseHandler = responseHandler;
  }

  getAllCategories = async (request, response, next) => {
    try {
      let categories = await this.categoryService.getAllCategories();
      this.responseHandler(
        response,
        201,
        categories,
        `Toutes les catégories 💥`
      );
    } catch (err) {
      next(err);
    }
  };

  getCategory = async (request, response, next) => {
    try {
      let category = await this.categoryService.getCategory(request.params.id);
      this.responseHandler(response, 201, category);
    } catch (err) {
      next(err);
    }
  };

  addCategory = async (request, response, next) => {
    try {
      let category = await this.categoryService.addCategory({
        ...request.body
      });
      this.responseHandler(response, 201, category, `Catégory ajouté ! 💥`);
    } catch (err) {
      next(err);
    }
  };

  updateCategory = async (request, response, next) => {
    try {
      let category = await this.categoryService.updateCategory(
        request.params.id,
        request.body.name
      );
      this.responseHandler(response, 201, category);
    } catch (err) {
      next(err);
    }
  };

  deleteCategory = async (request, response, next) => {
    try {
      let category = await this.categoryService.deleteCategory(
        request.params.id
      );
      this.responseHandler(response, 201, category);
    } catch (err) {
      next(err);
    }
  };
}

export default CategoryController;
