import "./style.css";
import { Link } from "react-router-dom";

import { FcLike } from "react-icons/fc";
import { MdOutlineExpandMore } from "react-icons/md";
import { BsCheckAll } from "react-icons/bs";

import { useContext } from "react";
import { EpisodeContext } from "../../provider/episode";

import { useQuery } from "@apollo/client";
import EPISODE_INFO from "../../querys/episode";

const Episode = () => {
  const {
    pages,
    input,
    handleClick,
    next,
    previous,
    filteredEpisodes,
    episodeVisto,
  } = useContext(EpisodeContext);

  const { loading, error, data } = useQuery(EPISODE_INFO, {
    variables: { page: pages },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>error {error.message}</p>;

  return (
    <>
      {input === "" ? (
        <>
          <div className="div-button">
            <button className="button-next" onClick={next}>
              Next
            </button>
            <button className="button-previous" onClick={previous}>
              Previous
            </button>
          </div>
          <div className="div-container">
            {data.episodes.results.map((ep) => (
              <div className="container-episode" key={ep.id}>
                <button className="visto" onClick={() => episodeVisto(ep.id)}>
                  <BsCheckAll /> assitido
                </button>
                <p>Ep: {ep.episode}</p>
                <p>Name: {ep.name}</p>
                <strong>Launch: {ep.air_date}</strong>
                <p>Participants: {ep.characters.length}</p>
                <button onClick={() => handleClick(ep.id)}>
                  <FcLike />
                  Like
                </button>
                <Link className="link" to={`episode/${ep.id}`}>
                  <MdOutlineExpandMore />
                  Ver Mais
                </Link>
              </div>
            ))}
          </div>
        </>
      ) : (
        <div className="div-container">
          {filteredEpisodes.map((item) => (
            <div className="container-episode" key={item.id}>
              <p>Ep: {item.episode}</p>
              <p>Name: {item.name}</p>
              <strong>Launch: {item.air_date}</strong>
              <p>Participants: {item.characters.length}</p>
              <button onClick={() => handleClick(item.id)}>
                <FcLike />
                Like
              </button>
            </div>
          ))}
        </div>
      )}
    </>
  );
};
export default Episode;
