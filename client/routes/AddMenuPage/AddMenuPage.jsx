import { useContext, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { Navigate, useNavigate } from 'react-router-dom';
import './AddMenuPage.css';
import MenuService from '../../services/menuService';
import { toast } from 'react-toastify';
import { IoCloudUploadOutline } from 'react-icons/io5';
import UploadService from '../../services/uploadService';

const baseUrl = import.meta.env.VITE_BASE_URL;

const initialState = {
  itemName: '',
  itemPrice: '',
  category: 'Sandwiches',
  addedPhoto: 'uploads/default.jpg',
};

const AddMenuPage = () => {
  const { user } = useContext(AuthContext);
  const [data, setData] = useState(initialState);
  const navigate = useNavigate();

  if (user.accountType === 'Customer') {
    return <Navigate to={'/'} />;
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const itemData = {
      name: data.itemName,
      price: data.itemPrice,
      category: data.category,
      photo: data.addedPhoto,
      restaurantId: user.id,
    };
    try {
      await MenuService.addMenuItem(itemData);
      setData(initialState);
      setTimeout(() => {
        toast.success('Menu Item Added Successfully!', {
          position: 'top-right',
          toastId: 'success6',
        });
      }, 1);
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (event, key) => {
    const copy = { ...data };
    copy[key] = event.target.value;
    setData(copy);
  };

  const uploadPhoto = async (event) => {
    try {
      const files = event.target.files;
      const data = new FormData();

      data.append('file', files[0]);

      const filename = await UploadService.upload(data);

      setData((prev) => {
        return { ...prev, addedPhoto: filename };
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="addMenuPage">
      <form onSubmit={handleSubmit}>
        <div className="heading">{user.name}</div>
        <div className="addMenuContainer">
          <div className="left">
            <div className="imgContainer">
              <img src={`${baseUrl}/${data.addedPhoto}`} alt="" />
            </div>
            <label className="imgUploaderContainer">
              <input type="file" className="imgInput" onChange={uploadPhoto} />
              <IoCloudUploadOutline /> Upload
            </label>
          </div>
          <div className="right">
            <div className="MenuItems">
              <label htmlFor="name">Name of Item:</label>
              <input
                type="text"
                name="name"
                id="name"
                value={data.itemName}
                onChange={(e) => {
                  handleChange(e, 'itemName');
                }}
              />
            </div>
            <div className="MenuItems">
              <label htmlFor="price">Price of Item:</label>
              <input
                type="text"
                name="price"
                id="price"
                value={data.itemPrice}
                onChange={(e) => {
                  handleChange(e, 'itemPrice');
                }}
              />
            </div>
            <div className="MenuItems">
              <select
                name="catogory"
                id="category"
                value={data.category}
                onChange={(e) => {
                  handleChange(e, 'category');
                }}
              >
                <option value="Sandwiches">Sandwiches</option>
                <option value="Hamburgers">Hamburgers</option>
                <option value="Chicken Item">Chicken Item</option>
                <option value="Pizza">Pizza</option>
                <option value="Ice Cream">Ice cream</option>
                <option value="Liquors">Liquors</option>
              </select>
            </div>
          </div>
        </div>

        <button onClick={handleSubmit} className="primaryButton">
          Create Item
        </button>
      </form>
    </div>
  );
};

export default AddMenuPage;
