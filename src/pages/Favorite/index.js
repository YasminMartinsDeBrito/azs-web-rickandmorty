import "./style.css";

import { useContext } from "react";
import { EpisodeContext } from "../../provider/episode";

import { FcDislike } from "react-icons/fc";

const Favorite = () => {
  const { favorite, removeItem } = useContext(EpisodeContext);

  return (
    <>
      <div className="container-list">
        {favorite.length === 0 ? (
          <>Nenhum Episodio Favorito</>
        ) : (
          favorite.map((ep, index) => (
            <div className="episode-container" key={index}>
              <p>Ep: {ep.id}</p>
              <p>Name: {ep.name}</p>
              <strong>Launch: {ep.air_date}</strong>
              <p>Participants: {ep.characters.length}</p>
              <button onClick={() => removeItem(ep.id)}>
                <FcDislike />
                DesLike
              </button>
            </div>
          ))
        )}
      </div>
    </>
  );
};
export default Favorite;
