import Image from './Image';

function TourPictures({ images }) {
  return (
    <section className="section-pictures">
      {images.map((image, index) => (
        <Image key={index} image={image} />
      ))}
    </section>
  );
}

export default TourPictures;
