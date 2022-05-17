import  "./style.css"

import { useContext } from "react";
import { EpisodeContext } from "../../provider/episode";

import { useQuery } from "@apollo/client";
import EPISODE_INFO from "../../querys/episode";

const Details = () => {
  const {
    pages,
    next,
    previous,
  } = useContext(EpisodeContext);

  const { loading, error, data } = useQuery(EPISODE_INFO, {
    variables: { page: pages },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>error {error.message}</p>;

  return (
    <>
      <div>
        <button className="button-next" onClick={next}>
          Next
        </button>
        <button className="button-previous" onClick={previous}>
          Previous
        </button>
      </div>

      <div className="container-list">
        {data.episodes.results.map((ep) => (
          <div className="episode-container" key={ep.id}>
            <p>Ep: {ep.episode}</p>
            <p>Name: {ep.name}</p>
            <strong>Launch: {ep.air_date}</strong>
            {ep.characters.map((character, index) => (<div key={index}>
              <img src={character.image} alt={character.image}/>
               <strong>{character.name}</strong>
               <p>{character.species}</p>
               <p>{character.status}</p>
            </div>))}
          </div>
        ))}
      </div>
    </>
  );
};
export default Details;
