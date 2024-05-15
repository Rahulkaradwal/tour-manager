import TourHeader from './TourHeader';
import TourDescription from './TourDescription';
import TourPictures from './TourPictures';
import TourReviews from './TourReviews';
import TourCta from './TourCta';
import { getTour } from './../../utils/api';
import { useLoaderData } from 'react-router-dom';

function TourDetails() {
  const data = useLoaderData();
  const tour = data.doc;
  return (
    <>
      <TourHeader tour={tour} />
      <TourDescription tour={tour} />
      <TourPictures images={tour.images} />
      <TourReviews reviews={tour.reviews} />
      <TourCta />
    </>
  );
}

export function loader({ params }) {
  console.log(params.tourId);
  const tour = getTour(params.tourId);

  return tour;
}

export default TourDetails;
