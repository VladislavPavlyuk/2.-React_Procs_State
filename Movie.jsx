// Props представляет коллекцию значений, которые ассоциированы с компонентом.
// Эти значения позволяют создавать динамические компоненты, которые не зависят от жестко закодированных статических данных.

const Movie = (props) => {
  return (
    <div>
      <p>Title: {props.title}</p>
      <p>Director: {props.director}</p>
      <p>Release: {props.release}</p>
      <p>Production: {props.production}</p>
      <img src={props.poster} alt="Poster"/>
    </div>
  );
};

Movie.defaultProps = {
  title: "empty",
  director: "empty",
  release: "empty",
  production: "empty",
  poster: "empty",
};