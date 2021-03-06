import "./App.css";
import { Switch, Route } from "react-router-dom";
import ViewAllRestaurants from "./views/ViewAllRestaurants";
import ViewRestaurant from "./views/ViewRestaurant";
import TopBar from "./components/TopBar";

function App() {
  return (
    <div className="App">
      <TopBar />
      <div className="container">
        <Switch>
          <Route path="/restaurants/:id">
            <ViewRestaurant />
          </Route>
          <Route path={["/tags/:tagId/cities/:cityId", "/tags/:tagId", "/cities/:cityId", "/"]}>
            <ViewAllRestaurants />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
