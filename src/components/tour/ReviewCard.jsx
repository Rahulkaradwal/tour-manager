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
        <svg className="reviews__star reviews__star--active">
          <use href="img/icons.svg#icon-star"></use>
        </svg>
        <svg className="reviews__star reviews__star--active">
          <use href="img/icons.svg#icon-star"></use>
        </svg>
        <svg className="reviews__star reviews__star--active">
          <use href="img/icons.svg#icon-star"></use>
        </svg>
        <svg className="reviews__star reviews__star--active">
          <use href="img/icons.svg#icon-star"></use>
        </svg>
        <svg className="reviews__star reviews__star--active">
          <use href="img/icons.svg#icon-star"></use>
        </svg>
      </div>
    </div>
  );
}

export default ReviewCard;
