import { Switch, Route } from "react-router-dom";

import Details from "../pages/Details";
import Episode from "../pages/Episode";
import Favorite from "../pages/Favorite";
import Assisted from "../pages/Assisted";

const Router = () => {
    return (
        <Switch>
            <Route exact path="/">
                <Episode />
            </Route>
            <Route path="/episode/:id">
                <Details />
            </Route>
            <Route path="/favorite">
                <Favorite />
            </Route>
            <Route path="/visto">
                <Assisted />
            </Route>
        </Switch>
    );
};
export default Router;
