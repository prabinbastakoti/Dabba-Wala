import './Featured.css';

const restaurants = [
  'Old Tandoori',
  'Fine Diners',
  'Moda',
  'Citylights Bistro',
  'Antique Foods',
];

const categories = [
  'Fast Food',
  'Casual',
  'Fast Casual',
  'Contemporary Casual',
  'Fine Dining',
];

const dishes = [
  'Burger',
  'Butter Chicken',
  'Katti Roll',
  'Biryani',
  'Ice Cream',
];

const Featured = () => {
  return (
    <div className="featured">
      <div className="first">
        <h1 className="heading">Featured Restaurants</h1>
        <div className="tagContainer">
          {restaurants.map((restaurant) => {
            return (
              <div key={restaurant} className="tags">
                {restaurant}
              </div>
            );
          })}
          <div className="tags">...</div>
        </div>
      </div>
      <div className="second">
        <h1 className="heading">Explore Categories</h1>
        <div className="tagContainer">
          {categories.map((category) => {
            return (
              <div key={category} className="tags">
                {category}
              </div>
            );
          })}
          <div className="tags">...</div>
        </div>
      </div>
      <div className="third">
        <h1 className="heading">Popular Dishes</h1>
        <div className="tagContainer">
          {dishes.map((dish) => {
            return (
              <div key={dish} className="tags">
                {dish}
              </div>
            );
          })}
          <div className="tags">...</div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
