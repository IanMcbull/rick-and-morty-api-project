import {useParams} from "react-router-dom"
import {fetchCharacters} from "../utils/api_hook"
import { useQuery } from "react-query"
import Errorpage from "./Errorpage";
import { GridLoader } from "react-spinners";
import CardComponent from "./Card"
function Characters() {
  const {page} = useParams()
  const { data, isError, error, isLoading } = useQuery(["characters", page], () =>
  fetchCharacters(page)
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
  <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-6 border-red-300">
     {data.results.map(char=><CardComponent character={char} key={char.id}/>)} 
  </section>
) 
}

export default Characters;