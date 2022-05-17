import "./App.css";

import Router from "./routes";
import { Link } from "react-router-dom";

import { EpisodeContext } from "./provider/episode";
import { useContext } from "react";

function App() {

  const { favorite, setInput, showEpisode, input, visto } = useContext(EpisodeContext);


  return (
    <>
      <header>
       <h1>Rick And Morty</h1>
        <Link className="voltar" to="/">Home</Link>
        <Link className="favorite" to="/favorite">Favoritos <span>{favorite.length}</span></Link>
       
        <Link className="assistidos" to="/visto">Assistidos <span>{visto.length}</span></Link>
       
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
      </header>

      <main>
        <Router />
      </main>

      <footer>
        <cite>Yasmin Martins de Brito</cite>
        <p>Created created with: <span>React, Graphql, CSS, React-icons, Apollo-client</span></p>
      </footer>
    </>
  );
}

export default App;
