import { useParams } from "react-router-dom";

export default function MovieReviews() {
  const params = useParams();

  console.log(params);
  return <div>MovieReviews</div>;
}
