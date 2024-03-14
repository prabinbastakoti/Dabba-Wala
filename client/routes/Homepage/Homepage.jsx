import './Homepage.css';
import Searchbar from '../../components/Searchbar/Searchbar';
import Featured from '../../components/Featured/Featured';

const Homepage = () => {
  return (
    <div className="homepage">
      <Searchbar />
      <Featured />
    </div>
  );
};

export default Homepage;
