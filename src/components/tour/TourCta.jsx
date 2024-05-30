import { loadStripe } from '@stripe/stripe-js';
import { payment } from '../../utils/api';
import { useNavigation } from 'react-router-dom';

function TourCta({ tour }) {
  const navigate = useNavigation();

  const makePayment = async () => {
    const stripe = await loadStripe(
      'pk_test_51PKq5AACtXlX27RCTta5Syz5IKT86zQAJ9tvxDR23JtoAYkWMyh9s3y1Wp2mknNEgovJz0caZT8UgfocKu57UVNI00Cd44xUro'
    );

    payment(tour.id, stripe);
  };

  return (
    <section className="section-cta">
      <div className="cta">
        <div className="cta__img cta__img--logo">
          <img src="img/logo-white.png" alt="Natours logo" className="" />
        </div>
        <img src="img/tour-5-2.jpg" alt="" className="cta__img cta__img--1" />
        <img src="img/tour-5-1.jpg" alt="" className="cta__img cta__img--2" />

        <div className="cta__content">
          <h2 className="heading-secondary">What are you waiting for?</h2>
          <p className="cta__text">
            10 days. 1 adventure. Infinite memories. Make it yours today!
          </p>
          <button
            onClick={makePayment}
            className="btn btn--green span-all-rows"
          >
            {navigate.state === 'submitting' ? 'Processing' : ' Book tour now!'}
          </button>
        </div>
      </div>
    </section>
  );
}

export default TourCta;
