import logo from '/logo-white.png';
import photo from '/default.jpg';
import { Form, Link, useLoaderData } from 'react-router-dom';
function Header() {
  const data = useLoaderData('root');

  return (
    <header className="header">
      <nav className="nav nav--tours">
        <Link to="/" className="nav__el">
          All tours
        </Link>
        <form className="nav__search">
          <button className="nav__search-btn">
            <svg>
              <use href="img/icons.svg#icon-search"></use>
            </svg>
          </button>
          <input
            type="text"
            placeholder="Search tours"
            className="nav__search-input"
          />
        </form>
      </nav>
      <div className="header__logo">
        <img src={logo} alt="Natours logo" />
      </div>
      {data ? (
        <nav className="nav nav--user">
          <a href="#" className="nav__el">
            My bookings
          </a>
          <a href="/me" className="nav__el">
            <img
              src={photo}
              alt={`Photo of ${data.name}`}
              className="nav__user-img"
            />
            <span>{data.name?.split(' ')[0]}</span>
          </a>
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
          <a href="/login" className="nav__el">
            Log in
          </a>
          <a href="/signup" className="nav__el nav__el--cta">
            Sign up
          </a>
        </nav>
      )}
    </header>
  );
}

export default Header;
