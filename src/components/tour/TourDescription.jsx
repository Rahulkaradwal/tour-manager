function TourDescription({ tour }) {
  const {
    difficulty,
    maxGroupSize,
    ratingsAverage,
    guides,
    name,
    description,
    startDates,
  } = tour;

  let leadGuide = guides.filter((val) => val.role === 'lead-guide');
  let tourGuide = guides.filter((val) => val.role === 'guide');
  let interGuide = guides.filter((val) => val.role === 'intern');
  console.log('tour guide', tourGuide);
  return (
    <section className="section-description">
      <div className="overview-box">
        <div>
          <div className="overview-box__group">
            <h2 className="heading-secondary ma-bt-lg">Quick facts</h2>
            <div className="overview-box__detail">
              <svg className="overview-box__icon">
                <use href="img/icons.svg#icon-calendar"></use>
              </svg>
              <span className="overview-box__label">Next date</span>
              <span className="overview-box__text">
                {' '}
                {new Date(startDates[0]).toLocaleString('en-us', {
                  month: 'long',
                  year: 'numeric',
                })}
              </span>
            </div>
            <div className="overview-box__detail">
              <svg className="overview-box__icon">
                <use href="img/icons.svg#icon-trending-up"></use>
              </svg>
              <span className="overview-box__label">Difficulty</span>
              <span className="overview-box__text">{difficulty}</span>
            </div>
            <div className="overview-box__detail">
              <svg className="overview-box__icon">
                <use href="img/icons.svg#icon-user"></use>
              </svg>
              <span className="overview-box__label">Participants</span>
              <span className="overview-box__text">{maxGroupSize} people</span>
            </div>
            <div className="overview-box__detail">
              <svg className="overview-box__icon">
                <use href="img/icons.svg#icon-star"></use>
              </svg>
              <span className="overview-box__label">Rating</span>
              <span className="overview-box__text">{ratingsAverage} / 5</span>
            </div>
          </div>

          <div className="overview-box__group">
            <h2 className="heading-secondary ma-bt-lg">Your tour guides</h2>
            {leadGuide[0] && (
              <>
                <div className="overview-box__detail">
                  <img
                    src={`/users/${leadGuide[0].photo}`}
                    alt="Lead guide"
                    className="overview-box__img"
                  />

                  <span className="overview-box__label">Lead guide</span>
                  <span className="overview-box__text">
                    {' '}
                    {leadGuide[0].name}{' '}
                  </span>
                </div>
              </>
            )}
            {tourGuide[0] && (
              <div className="overview-box__detail">
                <img
                  src={`/users/${tourGuide[0].photo}`}
                  alt="Tour guide"
                  className="overview-box__img"
                />
                <span className="overview-box__label">Tour guide</span>
                <span className="overview-box__text">{tourGuide[0].name}</span>
              </div>
            )}
            {interGuide && (
              <div className="overview-box__detail">
                <img
                  src={`/users/${tourGuide[0].photo}`}
                  alt="Intern"
                  className="overview-box__img"
                />
                <span className="overview-box__label">Intern</span>
                <span className="overview-box__text">Max Smith</span>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="description-box">
        <h2 className="heading-secondary ma-bt-lg">About {name}</h2>
        <p className="description__text">{description}</p>
      </div>
    </section>
  );
}

export default TourDescription;
