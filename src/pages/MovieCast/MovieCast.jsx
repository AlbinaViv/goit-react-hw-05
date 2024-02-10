import { useParams } from "react-router-dom";

export default function MovieCast() {
  const params = useParams();

  console.log(params);
  return <div>MovieCast</div>;
}
