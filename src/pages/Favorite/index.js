import { useContext } from "react"
import "./style.css"
import { EpisodeContext } from "../../provider/episode"


const Favorite = () => {
const {favorite, removeItem} = useContext(EpisodeContext)
   
    return (
        <>
        <div className="container-list">
            {favorite.map((ep) => (<div className="episode-container" key={ep.id}>
                <p>Ep: {ep.id}</p>
                <p>Name: {ep.name}</p>
                <strong>Launch: {ep.air_date}</strong>
                <p>Participants: {ep.characters.length}</p>
                <button onClick={() => removeItem(ep.id)}>Desfavoritar</button>
            </div>))}
        </div>
        
        </>
    )
}
export default Favorite