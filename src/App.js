import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/home";
import ProductDetails from "./components/productDetails";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/products/:id">
              <ProductDetails />
            </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
