import { createContext, useState } from "react";

import { useQuery } from "@apollo/client";
import EPISODE_INFO from "../../querys/episode";

export const EpisodeContext = createContext([]);

export const EpisodeProvider = ({ children }) => {
  const [pages, setPages] = useState(1);
  const [favorite, setFavorite] = useState([]);
  const [filteredEpisodes, setFilteredEpisodes] = useState([]);
  const [EpId, setEpId] = useState([])
  const [input, setInput] = useState("");

  const {loading, error, data} = useQuery(EPISODE_INFO, {
      variables: {page: pages , id: EpId}
  })

  function UserId(id){
      const ids = data.episodes.results.find((item) => (item.id === id))
     setEpId(ids)
  }

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
    const remove = data.episodes.results.filter(
      (item) => item.id !== productId
    );
    setFavorite(remove);
  }

  const next = () => {
    setPages(pages + 1);
    if (pages === 4) {
      return ;
    }
  };
  const previous = () => {
    setPages(pages - 1);
    if (pages === 0) {
      return;
    }
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
        EpId,
        UserId
      }}
    >
      {children}
    </EpisodeContext.Provider>
  );
};
