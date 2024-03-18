import './Menupage.css';
import { AuthContext } from '../../context/AuthContext';
import { useContext, useEffect, useState } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import MenuService from '../../services/menuService';

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
      <div className="heading">MENU</div>
      <div className="MenuContainer">
        {categories.map((category) => {
          return (
            <div className="" key={category}>
              <div key={category} className="categoryHeading">
                {category}
              </div>
              {menu.map((item) => {
                return item.category === category ? (
                  <div key={item.id} className="itemName">
                    <div>{item.name}</div>
                    <div>${item.price}</div>
                  </div>
                ) : (
                  ''
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Menupage;
