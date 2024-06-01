import { loadStripe } from '@stripe/stripe-js';
import { payment } from '../../utils/api';
import { useState } from 'react';

function TourCta({ tour }) {
  const [isProcessing, setIsProcessing] = useState(false);

  const makePayment = async () => {
    setIsProcessing(true);
    const stripe = await loadStripe(
      'pk_test_51PKq5AACtXlX27RCTta5Syz5IKT86zQAJ9tvxDR23JtoAYkWMyh9s3y1Wp2mknNEgovJz0caZT8UgfocKu57UVNI00Cd44xUro'
    );

    try {
      console.log('Tour ID:', tour.id);
      await payment(tour.id, stripe);
    } catch (error) {
      console.error('Payment error:', error);
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <section className="section-cta">
      <div className="cta">
        <div className="cta__img cta__img--logo">
          <img src="/logo-white.png" alt="Natours logo" className="" />
        </div>
        <img
          src="/tours/tour-5-2.jpg"
          alt=""
          className="cta__img cta__img--1"
        />
        <img
          src="/tours/tour-5-1.jpg"
          alt=""
          className="cta__img cta__img--2"
        />

        <div className="cta__content">
          <h2 className="heading-secondary">What are you waiting for?</h2>
          <p className="cta__text">
            10 days. 1 adventure. Infinite memories. Make it yours today!
          </p>
          <button
            onClick={makePayment}
            className="btn btn--green span-all-rows"
            disabled={isProcessing}
          >
            {isProcessing ? 'Processing...' : 'Book tour now!'}
          </button>
        </div>
      </div>
    </section>
  );
}

export default TourCta;
