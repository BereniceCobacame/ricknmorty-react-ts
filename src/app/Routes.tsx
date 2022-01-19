import { Switch, Redirect } from "react-router-dom";
import { RouteWithLayout } from "./utils";

//Layouts
import MainLayout from "../layouts/main";

//Pages
import Home from "../pages/Home";
import Character from "../pages/Character";
import EpisodesPage from "../pages/Episodes";
import CharactersPage from "../pages/Characters";

const Routes = () => {
  return (
    <Switch>
      <Redirect exact from="/" to="/home" />
      <RouteWithLayout
        path="/home"
        exact
        Layout={MainLayout}
        Component={Home}
      />
      <RouteWithLayout
        path="/ricknmorty/:id"
        exact
        Layout={MainLayout}
        Component={Character}
      />
      <RouteWithLayout
        path="/characters"
        exact
        Layout={MainLayout}
        Component={CharactersPage}
      />
      <RouteWithLayout
        path="/episodes"
        exact
        Layout={MainLayout}
        Component={EpisodesPage}
      />
    </Switch>
  );
};

export default Routes;
