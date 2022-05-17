import { gql } from "@apollo/client";

const EPISODE_INFO = gql`
  query Episodes($page: Int) {
    episodes(page: $page) {
      results {
        id
        name
        air_date
        episode
        created
        characters {
          image
          name
          species
          status
        }
      }
    }
  }
`;
export default EPISODE_INFO;
