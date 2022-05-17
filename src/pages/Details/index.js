import "./style.css";

import { useContext } from "react";
import { EpisodeContext } from "../../provider/episode";

import { useQuery } from "@apollo/client";
import EPISODE_INFO from "../../querys/episode";
import { useParams } from "react-router-dom";

const Details = () => {
  const { pages } = useContext(EpisodeContext);

  const { loading, error, data } = useQuery(EPISODE_INFO,{
    variables: {page: pages}
  });

  const params = useParams();
  const verify = data.episodes.results.find((item) => item.id === params.id);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>error {error.message}</p>;

  return (
    <>
      <div className="container-detail">
        <h3>{verify.episode}</h3>
        <p>{verify.name}</p>
        <p>{verify.air_date}</p>
        <div className="detail-container">
          <ul>
            {verify.characters.map((person, index) => (
              <li key={index}>
                <img src={person.image} alt="" />
                <strong>Name: {person.name}</strong>
                <p>Specie: {person.species}</p>
                <p>Status: {person.status}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};
export default Details;