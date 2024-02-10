import { TiArrowBack } from "react-icons/ti";
import { Link, useParams } from "react-router-dom";
import css from "./MovieDetailsPage.module.css";

export default function MovieDetailsPage() {
  const params = useParams();

  console.log(params);
  return (
    <>
      <span>MovieDetailsPage - {params.id}</span>
      <Link to={`/movies/${params.id}`}>
        <TiArrowBack
          className={css.myIcon}
          size="24"
        />
        Go back
      </Link>
    </>
  );
}
