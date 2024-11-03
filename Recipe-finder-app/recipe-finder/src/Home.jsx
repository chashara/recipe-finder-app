

import { Link } from 'react-router-dom';

const Home = () => (
  <div className="home">
    <h1>Welcome to Recipe Finder</h1>
    <p>Discover recipes based on ingredients, diet, and meal type.</p>
    <Link to="/search">
      <button className="get-started-btn">Get Started</button>
    </Link>
  </div>
);

export default Home;
