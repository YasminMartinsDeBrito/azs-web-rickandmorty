import './App.css';
import Router from './routes';
import {useHistory} from "react-router-dom"
import { useContext } from 'react';
import { EpisodeContext } from './provider/episode';
function App(){

  const {favorite} = useContext(EpisodeContext)

  const history = useHistory()

  
  return(
    <>
    <header>
      Rick and Morty

      <button onClick={() => history.push("/favorite")}>Favorite</button>
      <button onClick={() => history.push(`/id`)}>Favorite</button>
      <p>{favorite.length}</p>
    </header>

    <main>
       <Router/>
    </main>

    <footer>
      <cite>Yasmin Martins de Brito</cite>
      <p>Created  created with react, graphql, css</p>
    </footer>
    </>
  )
}

export default App;
