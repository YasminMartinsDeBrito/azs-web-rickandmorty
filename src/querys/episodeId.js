import { gql } from "@apollo/client";

const  EPISODE_ID_INFO = gql`
query EpisodesId($id:ID!){ 
  episode{
    id
    name
    air_date
    characters {
    image
    name
    species
    status
  }
  }
}
episode(id:$id){
  id
  name
  
}

  
 `;   
 export default EPISODE_ID_INFO
