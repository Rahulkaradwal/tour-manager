// CardContainer.js
import Card from './Card';
import { useLoaderData, useNavigation } from 'react-router-dom';
import { getTours } from '../../utils/api';
import Loader from './Loader';

function CardContainer() {
  const data = useLoaderData();
  const navigate = useNavigation();
  console.log(data.tours);

  return (
    <div className="overview">
      {navigate.state === 'loading' ? (
        <Loader />
      ) : (
        <div className="card-container">
          {data.tours.map((tour) => (
            <Card key={tour.id} {...tour} />
          ))}
        </div>
      )}
    </div>
  );
}

export default CardContainer;

export async function loader() {
  try {
    const tours = await getTours();
    return { tours };
  } catch (error) {
    return { error }; // Return an empty array in case of error or handle accordingly
  }
}
