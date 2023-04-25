class Meal {
  constructor(
    id,
    categoryIds,
    title,
    description,
    price,
    imageUrl,
    
  ) {
    this.id = id;
    this.categoryIds = categoryIds;
    this.title = title;
    this.description = description;
    this.price = price;
    this.imageUrl = imageUrl;
  }
}

export default Meal;
