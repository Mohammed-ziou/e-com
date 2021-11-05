import "./App.css";
import { Switch, Route } from "react-router-dom";

import HomePage from "./pages/HomePage/HomePage";
import ShopPage from "./pages/shopPage/ShopPage";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
