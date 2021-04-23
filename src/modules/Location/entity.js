class LocationEntity {
  constructor({ categoryId, floor, place, shelf }) {
    this.categoryId = categoryId;
    this.floor = floor;
    this.place = place;
    this.shelf = shelf;
  }

  validate() {
    if (!this.categoryId || !this.floor || !this.place || !this.shelf) {
      return false;
    } else {
      return true;
    }
  }
}

export default LocationEntity;
