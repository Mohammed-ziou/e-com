import "./App.css";
import { Switch, Route } from "react-router-dom";

import HomePage from "./pages/HomePage/HomePage";
import ShopPage from "./pages/shopPage/ShopPage";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
