import './App.css';
import Header from './components/Header';
import HomeScreen from './Screens/HomeScreen';
import ProductScreen from './Screens/ProductScreen';
import CartScreen from './Screens/CartScreen';
import LoginScreen from './Screens/LoginScreen';
import RegisterScreen from './Screens/RegisterScreen';
import ProfileScreen from './Screens/ProfileScreen';


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
          <Route exact path="/login" component={LoginScreen}  />
          <Route exact path="/register" component={RegisterScreen}  />
          <Route exact path="/profile" component={ProfileScreen}  />


        </Switch>
    </Router>
  );
}

export default App;
