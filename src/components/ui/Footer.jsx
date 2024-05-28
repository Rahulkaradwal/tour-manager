import { useLocation } from 'react-router-dom';
import logo from '/logo-green.png';
function Footer() {
  const location = useLocation();

  return (
    <div className="footer">
      <div className="footer__logo">
        <img src={logo} alt="Natours logo" />
      </div>
      {location.pathname === '/cart' ? (
        <div className="cart_footer">
          <p>
            <span>Total Price: $ 1000 </span>
          </p>
          <div className="cart-card_footer-buttons">
            <button className="btn cart_button ">BUY</button>
          </div>
        </div>
      ) : (
        <>
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
        </>
      )}
    </div>
  );
}

export default Footer;
