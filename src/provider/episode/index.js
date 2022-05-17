import { createContext, useState } from "react";

import { useQuery } from "@apollo/client";
import EPISODE_INFO from "../../querys/episode";

export const EpisodeContext = createContext([]);

export const EpisodeProvider = ({ children }) => {
  const [pages, setPages] = useState(1);
  const [input, setInput] = useState("");
  const [filteredEpisodes, setFilteredEpisodes] = useState([]);
  const [favorite, setFavorite] = useState([]);
  const [visto, setVisto] = useState([]);

  const { loading, error, data } = useQuery(EPISODE_INFO, {
    variables: { page: pages },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>error {error.message}</p>;

  function showEpisode(episode) {
    const filterEpisode = data.episodes.results.filter(
      (item) => item.name.toUpperCase() === episode.toUpperCase()
    );
    setFilteredEpisodes(filterEpisode);
  }

  function handleClick(productId) {
    const findProduct = data.episodes.results.find((element) => {
      return element.id === productId;
    });

    if (!favorite.includes(findProduct))
      setFavorite([...favorite, findProduct]);
  }

  function removeItem(productId) {
    const remove = favorite.slice();
    remove.splice(
      favorite.indexOf(favorite.find((item) => item.id === productId)),
      1
    );
    setFavorite([...remove]);
  }

  function episodeVisto(productId) {
    const findProduct = data.episodes.results.find((element) => {
      return element.id === productId;
    });

    if (!visto.includes(findProduct)) setVisto([...visto, findProduct]);
  }

  const next = () => {
    if (pages === 4) {
      return;
    }
    setPages(pages + 1);
  };
  const previous = () => {
    if (pages === 0) {
      return;
    }
    setPages(pages - 1);
  };

  return (
    <EpisodeContext.Provider
      value={{
        pages,
        setPages,
        favorite,
        setFavorite,
        filteredEpisodes,
        setFilteredEpisodes,
        input,
        setInput,
        showEpisode,
        handleClick,
        removeItem,
        next,
        previous,
        episodeVisto,
        visto,
      }}
    >
      {children}
    </EpisodeContext.Provider>
  );
};
