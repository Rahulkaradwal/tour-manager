function NavItem({ link, text, icon, active }) {
  return (
    <li className={active ? 'side-nav--active' : ''}>
      <a href={link}>
        <svg>
          <use xlinkHref={`img/icons.svg#icon-${icon}`} />
        </svg>
        {text}
      </a>
    </li>
  );
}

export default NavItem;
