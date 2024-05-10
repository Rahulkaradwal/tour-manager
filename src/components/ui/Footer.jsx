import logo from '/logo-green.png';
function Footer() {
  return (
    <div className="footer">
      <div className="footer__logo">
        <img src={logo} alt="Natours logo" />
      </div>
      <ul className="footer__nav">
        <li>
          <a href="#">About us</a>
        </li>
        <li>
          <a href="#">Download apps</a>
        </li>
        <li>
          <a href="#">Become a guide</a>
        </li>
        <li>
          <a href="#">Careers</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
      <p className="footer__copyright">
        &copy; by Rahul Karadwal. All rights reserved.
      </p>
    </div>
  );
}

export default Footer;
