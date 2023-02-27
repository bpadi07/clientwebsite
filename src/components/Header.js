import Navbar from './Navbar';
// ...
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <div className="nav-area">
        <Link to="/" className="logo">
          <img src="https://codenovas.com/wp-content/uploads/2022/04/logo512-1.png" alt="logo"/>
        </Link>
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
