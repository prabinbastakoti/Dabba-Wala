import './Featured.css';

const Featured = () => {
  return (
    <div className="featured">
      <div className="first">
        <h1 className="heading">Featured Restaurants</h1>
        <img src="/1.jpg" alt="" className="image" />
      </div>
      <div className="second">
        <h1 className="heading">Explore Categories</h1>
        <img src="/2.jpg" alt="" className="image" />
      </div>
      <div className="third">
        <h1 className="heading">Popular Dishes</h1>
        <img src="/3.jpg" alt="" className="image" />
      </div>
    </div>
  );
};

export default Featured;
