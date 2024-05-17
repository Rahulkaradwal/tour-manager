// CardContainer.js
import Card from './Card';
import { useLoaderData, useNavigation, useSubmit } from 'react-router-dom';
import Loader from './Loader';
import { useSelector } from 'react-redux';
// import { loadTour } from '../../store/tourSlice';
import { useEffect } from 'react';
import { getTokenDuration } from '../../utils/getToken';

function CardContainer() {
  const navigate = useNavigation();

  const { tours } = useSelector((state) => state.tour);

  const token = useLoaderData();
  const submit = useSubmit();

  useEffect(() => {
    if (!token) return;

    if (token === 'Expired') {
      return;
    }

    const tokenDuration = getTokenDuration();

    setTimeout(() => {
      submit(null, { action: '/logout', method: 'post' });
    }, tokenDuration);
  }, [token, submit]);

  return (
    <div className="overview">
      {navigate.state === 'loading' ? (
        <Loader />
      ) : (
        <div className="card-container">
          {tours.map((tour) => (
            <Card key={tour.id} {...tour} />
          ))}
        </div>
      )}
    </div>
  );
}

export default CardContainer;
