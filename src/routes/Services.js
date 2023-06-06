import { Link } from 'react-router-dom';

const Services = () => {
  return (
    <>
      <h2>Services page</h2>

      <Link to="/IT-training">IT-training</Link>
      <Link to="/IT-Consulting">IT-Consulting</Link>
      <Link to="/IT-Placement">IT-Placement</Link>
    </>
  );
};

export default Services;
