function Card() {
  return (
    <div className="card">
      <div className="card__header">
        <div className="card__picture">
          <div className="card__picture-overlay">&nbsp;</div>
          <img
            src="img/tour-3-cover.jpg"
            alt="Tour 1"
            className="card__picture-img"
          />
        </div>

        <h3 className="heading-tertirary">
          <span>The Snow Adventurer</span>
        </h3>
      </div>

      <div className="card__details">
        <h4 className="card__sub-heading">Difficult 3-day tour</h4>
        <p className="card__text">
          Exciting adventure in the snow with snowboarding and skiing
        </p>
        <div className="card__data">
          <svg className="card__icon">
            <use href="img/icons.svg#icon-map-pin"></use>
          </svg>
          <span>Aspen, USA</span>
        </div>
        <div className="card__data">
          <svg className="card__icon">
            <use href="img/icons.svg#icon-calendar"></use>
          </svg>
          <span>January 2022</span>
        </div>
        <div className="card__data">
          <svg className="card__icon">
            <use href="img/icons.svg#icon-flag"></use>
          </svg>
          <span>2 stops</span>
        </div>
        <div className="card__data">
          <svg className="card__icon">
            <use href="img/icons.svg#icon-user"></use>
          </svg>
          <span>10 people</span>
        </div>
      </div>

      <div className="card__footer">
        <p>
          <span className="card__footer-value">$697</span>
          <span className="card__footer-text">per person</span>
        </p>
        <p className="card__ratings">
          <span className="card__footer-value">4.9</span>
          <span className="card__footer-text">rating (7)</span>
        </p>
        <a href="#" className="btn btn--green btn--small">
          Details
        </a>
      </div>
    </div>
  );
}

export default Card;
