import logo from '/logo-white.png';
import photo from '/default.jpg';
import { Form, Link } from 'react-router-dom';
import Search from './Search';
function Header() {
  // const data = useLoaderData();

  const name = localStorage.getItem('name');

  return (
    <header className="header">
      <nav className="nav nav--tours">
        <Link to="/" className="nav__el">
          All tours
        </Link>
        {name && <Search />}
      </nav>
      <div className="header__logo">
        <img src={logo} alt="Natours logo" />
      </div>
      {name ? (
        <nav className="nav nav--user">
          <Link to="#" className="nav__el">
            My bookings
          </Link>
          <Link to="/account" className="nav__el">
            <img
              src={photo}
              alt={`Photo of ${name}`}
              className="nav__user-img"
            />
            <span>{name?.split(' ')[0]}</span>
          </Link>
          <Form
            action="/logout"
            method="post"
            className="nav__el nav__el--logout"
          >
            <button className="nav__el nav__el--logout" type="submit">
              Log out
            </button>
          </Form>
        </nav>
      ) : (
        <nav className="nav nav--user">
          <Link to="/login" className="nav__el">
            Log in
          </Link>
          <Link to="/signup" className="nav__el nav__el--cta">
            Sign up
          </Link>
        </nav>
      )}
    </header>
  );
}

export default Header;
