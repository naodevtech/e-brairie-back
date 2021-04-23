class BookEntity {
  constructor({
    authorId,
    categoryId,
    locationId,
    title,
    description,
    amount
  }) {
    this.authorId = authorId;
    this.categoryId = categoryId;
    this.locationId = locationId;
    this.title = title;
    this.description = description;
    this.amount = amount;
  }

  validate() {
    if (
      !this.authorId ||
      !this.categoryId ||
      !this.locationId ||
      !this.title ||
      !this.description ||
      !this.amount
    ) {
      return false;
    } else {
      return true;
    }
  }
}

export default BookEntity;
