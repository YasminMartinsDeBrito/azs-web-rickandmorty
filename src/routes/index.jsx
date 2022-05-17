import { Switch , Route } from "react-router-dom"

import { useQuery } from "@apollo/client";
import EPISODE_INFO from "../querys/episode";

import Details from "../pages/Details"
import Episode from "../pages/Episode"
import Favorite from "../pages/Favorite"
import { useContext } from "react";
import { EpisodeContext } from "../provider/episode";

const Router = () => {
    const {pages, EpId} = useContext(EpisodeContext)

    const {loading, error, data} = useQuery(EPISODE_INFO, {
        variables: {page: pages }
    })
 

    return (
        <Switch>
            <Route exact path="/">
                <Episode />
            </Route>
            <Route path="/:id">
                <Details/>
            </Route>
            <Route path="/favorite">
                <Favorite/>
            </Route>
        </Switch>
    )
}
export default Router