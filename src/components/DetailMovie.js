import PropTypes from "prop-types";

const DetailMovie = ({
  id,
  sTitle,
  title,
  backImg,
  rating,
  runtime,
  genres,
}) => {
  return (
    <div id={id}>
      <img src={backImg} alt={sTitle} />
      <h2>{title}</h2>
      <p>{rating}/10</p>
      <p>{runtime} minutes</p>
      <p>Tag</p>
      <ul>{genres && genres.map((g) => <li key={g}>{g}</li>)}</ul>
    </div>
  );
};

DetailMovie.propTypes = {
  id: PropTypes.number.isRequired,
  sTitle: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  backImg: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  runtime: PropTypes.number.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default DetailMovie;
