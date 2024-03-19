import './Menupage.css';
import { AuthContext } from '../../context/AuthContext';
import { useContext, useEffect, useState } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import MenuService from '../../services/menuService';
import ScrollToTop from '../../components/ScrollToTop';

const baseUrl = import.meta.env.VITE_BASE_URL;

const categories = [
  'Sandwiches',
  'Hamburgers',
  'Chicken Item',
  'Pizza',
  'Ice Cream',
  'Liquors',
];

const Menupage = () => {
  const { user } = useContext(AuthContext);
  const [menu, setMenu] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    MenuService.getMenuItem(id)
      .then((response) => {
        setMenu(response.result);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  if (!user) {
    return <Navigate to={'/loginCustomer'} />;
  }

  if (!menu) {
    return <div>Loading...</div>;
  }

  return (
    <div className="Menupage">
      <ScrollToTop />
      <div className="heading">MENU</div>
      <div className="MenuContainer">
        {categories.map((category) => {
          return (
            <div className="" key={category}>
              <div key={category} className="categoryHeading">
                {category}
              </div>
              <div className="itemContainer">
                {menu.map((item) => {
                  return item.category === category ? (
                    <div key={item.id} className="itemName">
                      <img
                        src={`${baseUrl}/${item.photo}`}
                        alt=""
                        className="itemThumbnail"
                      />
                      <div className="itemPricing">
                        <div>{item.name}</div>
                      </div>
                      <div>${item.price}</div>
                    </div>
                  ) : (
                    ''
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Menupage;
