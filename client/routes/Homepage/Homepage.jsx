import './Homepage.css';
import { useContext } from 'react';
import Searchbar from '../../components/Searchbar/Searchbar';
import Featured from '../../components/Featured/Featured';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

const Homepage = () => {
  const { user } = useContext(AuthContext);

  console.log(typeof user, user);

  return (
    <div className="homepage">
      <Searchbar />
      <Featured />
      <div className="savor">
        <h1 className="heading">
          How to Savor with Daabba Walla: 3 Simple Steps
        </h1>
        <div className="cardContainer">
          <div className="card">
            <h2 className="title">Discover Local Menus</h2>
            <p className="description">
              Dive into an array of menus from local restaurants, each telling a
              unique culinary story.
            </p>
          </div>
          <div className="card">
            <h2 className="title">Personalize Your Palate</h2>
            <p className="description">
              Customize your orders based on your cravings. Daabba Walla adapts
              to your taste preferences, ensuring every bite is a delight.
            </p>
          </div>
          <div className="card">
            <h2 className="title">Set Your Delivery Rhythm</h2>
            <p className="description">
              Whether it's a mid-week treat or a weekend feast, Daabba Walla
              lets you set the schedule. Your favorite meals arrive on time,
              every time.
            </p>
          </div>
          <div className="card">
            <h2 className="title">Discover Local Menus</h2>
            <p className="description">
              Dive into an array of menus from local restaurants, each telling a
              unique culinary story.
            </p>
          </div>
        </div>
      </div>
      <Link to={'/customerRegister'} className="primaryButton joinButton">
        Join DABBA WALLA Today!
      </Link>
      <div className="indulge">
        <h1 className="heading">
          Indulge in Culinary Delights with Dabba Walla!
        </h1>
        <p className="paragraph1">
          Welcome to Dabba Walla, your go-to destination for mouthwatering
          culinary experiences. At Dabba Walla, we blend passion with flavors to
          serve you a gastronomic journey like no other.
        </p>
      </div>
      <div>
        <h1 className="heading">Why Dabba Walla?</h1>
        <div className="cardContainer">
          <div className="card">
            <h2 className="title">Delectable Delicacies</h2>
            <p className="description">
              Savor the finest flavors curated from the freshest ingredients.
              Our menu is a celebration of taste that caters to every palate.
            </p>
          </div>
          <div className="card">
            <h2 className="title">Home-Style Goodness</h2>
            <p className="description">
              Experience the warmth of homemade goodness with every bite. Our
              chefs infuse love and tradition into every dish they prepare.
            </p>
          </div>
          <div className="card">
            <h2 className="title">Convenience Redefined</h2>
            <p className="description">
              Enjoy the convenience of a quick and satisfying meal. Dabba Walla
              brings you a diverse menu of culinary delights, right at your
              doorstep.
            </p>
          </div>
          <div className="card">
            <h2 className="title">Quality Assurance</h2>
            <p className="description">
              We believe in serving excellence. Our commitment to quality
              ensures that every dish surpasses your expectations.
            </p>
          </div>
        </div>
      </div>
      <div>
        <h1 className="heading">Explore Our Culinary Wonders</h1>
        <p className="paragraph1">
          Try our <span className="bold">Spicy Chicken Curry </span>or indulge
          in a classic
          <span className="bold"> Margherita Pizza</span>.
        </p>
      </div>
      <div className="menu-container">
        <div>
          <h1 className="heading">Our Menu</h1>
        </div>
        <div className="menu-item">
          <h2 className="title1">Classic Burger </h2>
          <div className="dish">
            <p>Juicy beef patty, lettuce, tomato, cheese, and special sauce.</p>
            <p>$ 8.99</p>
          </div>
        </div>
        <div className="menu-item">
          <h2 className="title1">Margherita Pizza</h2>
          <div className="dish">
            <p>
              Tomato, fresh mozzarella, basil, and olive oil on a thin crust.
            </p>
            <p>$ 10.99</p>
          </div>
        </div>
        <div className="menu-item">
          <h2 className="title1">Chicken Alfredo Pasta</h2>
          <div className="dish">
            <p>
              Grilled chicken breast with creamy Alfredo sauce over fettuccine.
            </p>
            <p>$ 12.99</p>
          </div>
        </div>
        <div className="menu-item">
          <h2 className="title1">Classic Burger </h2>
          <div className="dish">
            <p>Juicy beef patty, lettuce, tomato, cheese, and special sauce.</p>
            <p>$ 8.99</p>
          </div>
        </div>
        <div className="menu-item">
          <h2 className="title1">Margherita Pizza</h2>
          <div className="dish">
            <p>
              Tomato, fresh mozzarella, basil, and olive oil on a thin crust.
            </p>
            <p>$ 10.99</p>
          </div>
        </div>
        <div className="menu-item">
          <h2 className="title1">Chicken Alfredo Pasta</h2>
          <div className="dish">
            <p>
              Grilled chicken breast with creamy Alfredo sauce over fettuccine.
            </p>
            <p>$ 12.99</p>
          </div>
        </div>
      </div>

      <div>
        <h1 className="heading">Our Philosophy</h1>
        <p className="paragraph1">
          At Dabba Walla, we believe in creating culinary experiences that go
          beyond the ordinary. Our chefs meticulously select the finest
          ingredients to bring you a fusion of flavors that tantalize your taste
          buds. From traditional recipes passed down through generations to
          innovative dishes that push the boundaries, we strive to offer a
          diverse and memorable menu. Every meal we serve is a reflection of our
          commitment to quality, authenticity, and the joy of sharing good food
          with our community.
        </p>
      </div>
      <div>
        <h1 className="heading">What Our Community is Saying</h1>
        <div className="cardContainer">
          <div className="card">
            <p className="description">
              "
              <i>
                Daabba Walla is my go-to for stress-free dinners. I get to try
                different dishes without lifting a finger!
              </i>
              " <span>- Rachel, Daabba Explorer</span>
            </p>
          </div>
          <div className="card">
            <p className="description">
              "
              <i>
                Daabba Walla is my go-to for stress-free dinners. I get to try
                different dishes without lifting a finger!
              </i>
              " <span>- Rachel, Daabba Explorer</span>
            </p>
          </div>
          <div className="card">
            <p className="description">
              "
              <i>
                Daabba Walla is my go-to for stress-free dinners. I get to try
                different dishes without lifting a finger!
              </i>
              " <span>- Rachel, Daabba Explorer</span>
            </p>
          </div>
          <div className="card">
            <p className="description">
              "
              <i>
                Daabba Walla is my go-to for stress-free dinners. I get to try
                different dishes without lifting a finger!
              </i>
              " <span>- Rachel, Daabba Explorer</span>
            </p>
          </div>
        </div>
      </div>

      <h1 className="heading">Connect and Share Your Culinary Adventures!</h1>
    </div>
  );
};

export default Homepage;
