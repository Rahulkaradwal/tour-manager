import logo from '/logo-white.png';
import photo from '/default.jpg';
import { Form } from 'react-router-dom';
function Header() {
  const name = localStorage.getItem('name');

  return (
    <header className="header">
      <nav className="nav nav--tours">
        <a href="#" className="nav__el">
          All tours
        </a>
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
      {name ? (
        <nav className="nav nav--user">
          <a href="#" className="nav__el">
            My bookings
          </a>
          <a href="/me" className="nav__el">
            <img
              src={photo}
              alt={`Photo of ${name}`}
              className="nav__user-img"
            />
            <span>{name.split(' ')[0]}</span>
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
