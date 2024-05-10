function Image({ image }) {
  return (
    <div className="picture-box">
      <img
        className="picture-box__img picture-box__img--1"
        src={`/tours/${image}`}
        alt="The Park Camper Tour 1"
      />
    </div>
  );
}

export default Image;
