import Card from './Card';
import { getTours } from './../../utils/api';
import { useLoaderData } from 'react-router-dom';

function CardContainer() {
  const data = useLoaderData();
  const tours = data.doc;

  return (
    <div className="overview">
      <div className="card-container">
        {tours.map((tour) => (
          <Card key={tour.id} {...tour} />
        ))}
      </div>
    </div>
  );
}

export default CardContainer;

export async function loader() {
  const tours = await getTours();
  return tours;
}
