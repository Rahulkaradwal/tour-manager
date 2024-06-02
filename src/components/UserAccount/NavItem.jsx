import { Link } from 'react-router-dom';

function NavItem({ link, text, icon, active }) {
  return (
    <li className={active ? 'side-nav--active' : ''}>
      <Link to={link}>
        <svg>
          <use xlinkHref={`img/icons.svg#icon-${icon}`} />
        </svg>
        {text}
      </Link>
    </li>
  );
}

export default NavItem;
