import { Link, useNavigation } from 'react-router-dom';

function CartProduct(tour) {
  const navigate = useNavigation();
  return (
    <div className="cart-card">
      <div className="cart-card__header">
        <div className="cart-card__picture">
          <div className="cart-card__picture-overlay">&nbsp;</div>
          <img
            src={`/tours/${tour.imageCover}`}
            alt={`${tour.name} image`}
            className="cart-card__picture-img"
          />
        </div>

        <h3 className="cart-heading-tertirary">
          <span>{tour.name}</span>
        </h3>
      </div>

      <div className="cart-card__details">
        <h4 className="cart-card__sub-heading">
          {tour.difficulty} {tour.duration}-day tour
        </h4>
        <p className="cart-card__text">{tour.summary}</p>
        <div className="cart-card__data">
          <svg className="cart-card__icon">
            <use href="/icons.svg#icon-map-pin"></use>
          </svg>
          <span>Aspen, USA</span>
        </div>
        <div className="cart-card__data">
          <svg className="cart-card__icon">
            <use href="/icons.svg#icon-calendar"></use>
          </svg>
          <span>
            {new Date(tour.startDates[0]).toLocaleString('en-us', {
              month: 'long',
              year: 'numeric',
            })}
          </span>
        </div>
        <div className="cart-card__data">
          <svg className="cart-card__icon">
            <use href="/icons.svg#icon-flag"></use>
          </svg>
          <span>
            {tour.locations.length}{' '}
            {tour.locations.length > 1 ? 'Stops' : 'Stop'}
          </span>
        </div>
        <div className="cart-card__data">
          <svg className="cart-card__icon">
            <use href="/icons.svg#icon-user"></use>
          </svg>
          <span>{tour.maxGroupSize} people</span>
        </div>
      </div>

      <div className="cart-card__footer">
        <p>
          <span>Total Price: </span>

          <span className="cart-card__footer-value">$ {tour.price} </span>
        </p>
        <div className="cart-card_footer-buttons">
          <button className="btn cart_button ">-</button>
          <Link className=" cart_link cart_button " to={`/detail/${tour.id}`}>
            {navigate.state === 'submitting' ? 'Loading' : 'Buy'}
          </Link>
          <button className="btn  cart_button">+</button>
        </div>
      </div>
    </div>
  );
}

export default CartProduct;
