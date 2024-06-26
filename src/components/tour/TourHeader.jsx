function TourHeader({ tour }) {
  const { name, duration, imageCover } = tour;

  return (
    <section className="section-header">
      <div className="header__hero">
        <div className="header__hero-overlay">&nbsp;</div>
        <img
          className="header__hero-img"
          src={`/tours/${imageCover}`}
          alt={`${name}`}
        />
      </div>
      <div className="heading-box">
        <h1 className="heading-primary">
          <span>{name}</span>
        </h1>
        <div className="heading-box__group">
          <div className="heading-box__detail">
            <svg className="heading-box__icon">
              <use href="img/icons.svg#icon-clock"></use>
            </svg>
            <span className="heading-box__text">{duration} days</span>
          </div>
          <div className="heading-box__detail">
            <svg className="heading-box__icon">
              <use href="img/icons.svg#icon-map-pin"></use>
            </svg>
            <span className="heading-box__text">Las Vegas, USA</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TourHeader;
