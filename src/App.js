import './App.css';
import Header from './components/Header';
import HomeScreen from './Screens/HomeScreen';
import ProductScreen from './Screens/ProductScreen';
import CartScreen from './Screens/CartScreen';

import {
  BrowserRouter as Router,
  Switch,
  Route} from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
          <Route exact path="/" component={HomeScreen} />
          <Route exact path="/product/:id" component={ProductScreen}  />
          <Route exact path="/cart/:id?" component={CartScreen}  />
        </Switch>
    </Router>
  );
}

export default App;
