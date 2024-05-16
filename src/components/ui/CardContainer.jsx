// CardContainer.js
import Card from './Card';
import { useLoaderData } from 'react-router-dom';
import { getTours } from '../../utils/api';

function CardContainer() {
  const data = useLoaderData();

  return (
    <div className="overview">
      (
      <div className="card-container">
        {data.tours.map((tour) => (
          <Card key={tour.id} {...tour} />
        ))}
      </div>
      )
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
