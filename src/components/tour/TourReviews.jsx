import ReviewCard from './ReviewCard';

function TourReviews({ reviews }) {
  return (
    <section className="section-reviews">
      <div className="reviews">
        {reviews.map((review) => (
          <ReviewCard key={review._id} review={review} />
        ))}
      </div>
    </section>
  );
}

export default TourReviews;
