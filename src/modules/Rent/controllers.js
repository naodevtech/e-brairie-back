class RentController {
  constructor({ rentService, responseHandler }) {
    this.rentService = rentService;
    this.responseHandler = responseHandler;
  }

  getAllRents = async (request, response, next) => {
    try {
      let rents = await this.rentService.getAllRents();
      this.responseHandler(response, 201, rents, `Toutes les locations 💥`);
    } catch (err) {
      next(err);
    }
  };

  getRent = async (request, response, next) => {
    try {
      let rent = await this.rentService.getRent(request.params.id);
      this.responseHandler(response, 201, rent);
    } catch (err) {
      next(err);
    }
  };

  addRent = async (request, response, next) => {
    try {
      const rentData = {
        userId: request.params.id,
        bookId: request.body.bookId,
        in: request.body.in,
        back: request.body.back
      };
      let rent = await this.rentService.addRent(rentData);
      this.responseHandler(
        response,
        201,
        rent,
        `Nouvelle location ajouté ! 💥`
      );
    } catch (err) {
      next(err);
    }
  };

  updateRent = async (request, response, next) => {
    try {
      let rent = await this.rentService.updateRent(request.params.id, {
        ...request.body
      });
      this.responseHandler(response, 201, 'Location mise à jour 💥');
    } catch (err) {
      next(err);
    }
  };

  deleteRent = async (request, response, next) => {
    try {
      let rent = await this.bookService.deleteRent(request.params.id);
      this.responseHandler(response, 201, `La location à bien été supprimé 💥`);
    } catch (err) {
      next(err);
    }
  };
  getRentsByUserId = async (request, response, next) => {
    try {
      console.log('hello', request.params.id);
      let rents = await this.rentService.getRentsByUserId(request.params.id);
      this.responseHandler(
        response,
        201,
        rents,
        `Toutes les locations pour cet utilisateur 💥`
      );
    } catch (err) {
      next(err);
    }
  };
}

export default RentController;
