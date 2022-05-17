import "./style.css";

import { useContext } from "react";
import { EpisodeContext } from "../../provider/episode";

const Assisted = () => {
  const { visto } = useContext(EpisodeContext);

  return (
    <>
      <div className="container-list">
        {visto.length === 0 ? (
          <>Você não assistiu nenhum episodio</>
        ) : (
          visto.map((ep, index) => (
            <div className="episode-container" key={index}>
              <p>Ep: {ep.id}</p>
              <p>Name: {ep.name}</p>
              <strong>Launch: {ep.air_date}</strong>
              <p>Participants: {ep.characters.length}</p>
            </div>
          ))
        )}
      </div>
    </>
  );
};
export default Assisted;
