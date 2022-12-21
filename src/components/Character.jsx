import { useParams } from "react-router-dom";
import { fetchCharacter } from "../utils/api_hook";
import { useQuery } from "react-query";
import Errorpage from "./Errorpage";
import { GridLoader } from "react-spinners";
import CardComponent from "./Card";
function Character() {
  const { id } = useParams();
  const { data, isError, error, isLoading } = useQuery(["character", id], () =>
    fetchCharacter(id)
  );
  if (isLoading) {
    return (
      <div className="h-[80vh] flex items-center justify-center">
        <GridLoader color="green" size="20px" />
      </div>
    );
  }
  if (isError) {
    return <Errorpage errorMsg={error.message} />;
  }
  return (
    <section className="flex justify-center items-center h-[80vh] mt-16">
      <CardComponent character={data}/>
    </section>
  );
}

export default Character;
