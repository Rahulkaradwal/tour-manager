function ReviewCard({ review }) {
  return (
    <div className="reviews__card">
      <div className="reviews__avatar">
        <img
          src={`/users/${review.user.photo}`}
          alt="Jim Brown"
          className="reviews__avatar-img"
        />
        <h6 className="reviews__user">Jim Brown</h6>
      </div>
      <p className="reviews__text">{review.review}</p>
      <div className="reviews__rating">
        {[1, 2, 3, 4, 5].map((star) => (
          <svg
            key={star}
            className={`reviews__star reviews__star--${
              review.rating >= star ? 'active' : 'inactive'
            }`}
            xmlns="http://www.w3.org/2000/svg"
          >
            <use xlinkHref="/icons.svg#icon-star" />
          </svg>
        ))}
      </div>
    </div>
  );
}

export default ReviewCard;
