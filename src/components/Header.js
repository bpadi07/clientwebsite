import Navbar from './Navbar';
import logoImage from '../img/blob.png'
// ...
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <div className="nav-area">
        <Link to="/" className="logo">
          <img src={logoImage} width="180px" height="400px"  alt="logo"/>
        </Link>
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
