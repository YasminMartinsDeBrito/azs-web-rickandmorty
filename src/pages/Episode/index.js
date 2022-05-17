import "./style.css";
import {useHistory} from "react-router-dom"

import { useContext } from "react";
import { EpisodeContext } from "../../provider/episode";

import { useQuery } from "@apollo/client";
import EPISODE_INFO from "../../querys/episode";

const Episode = () => {
  const history = useHistory()

  const {
    pages,
    setInput,
    showEpisode,
    input,
    handleClick,
    next,
    previous,
    filteredEpisodes
  } = useContext(EpisodeContext);

  const { loading, error, data } = useQuery(EPISODE_INFO, {
    variables: { page: pages },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>error {error.message}</p>;

  return (
    <>
      <div className="inputDiv">
        <input
          className="inputs"
          placeholder="Digitar Pesquisa"
          onChange={(event) => setInput(event.target.value)}
        />
        <button className="buttonInput" onClick={() => showEpisode(input)}>
          <p className="inputP">Pesquisar</p>
        </button>
      </div>
      <div>
        <button className="button-next" onClick={next}>
          Next
        </button>
        <button className="button-previous" onClick={previous}>
          Previous
        </button>
      </div>
      {input === "" ? (
        <div className="container-list">
          {data.episodes.results.map((ep) => (
            <div className="episode-container" key={ep.id}>
              <p>Ep: {ep.episode}</p>
              <p>Name: {ep.name}</p>
              <strong>Launch: {ep.air_date}</strong>
              <p>Participants: {ep.characters.length}</p>
              <button onClick={() => handleClick(ep.id)}>Favoritar</button>
              <button onClick={() => history.push("/id")}>Ver mais</button>
            </div>
          ))}
        </div>
      ) : (
        <div className="container-list">
          {filteredEpisodes.map((item) => (
            <div className="episode-container" key={item.id}>
              <p>Ep: {item.itemisode}</p>
              <p>Name: {item.name}</p>
              <strong>Launch: {item.air_date}</strong>
              {/* <strong>Create: {item.created}</strong> */}
              <p>Participants: {item.characters.length}</p>
              <button onClick={() => handleClick(item.id)}>Favoritar</button>
            </div>
          ))}
        </div>
      )}
    </>
  );
};
export default Episode;
