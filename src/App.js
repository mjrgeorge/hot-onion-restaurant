import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/home/Home';
import NotMatch from './components/notMatch/NotMatch';
import Shop from './components/shop/Shop';
import ProductDetail from './productDetail/ProductDetail';
import Cart from './components/cart/Cart';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route path="/menu/:menuItem">
          <Home></Home>
        </Route>
        <Route path="/detail/:menuId">
          <ProductDetail></ProductDetail>
        </Route>
        <Route path="/cart">
          <Cart></Cart>
        </Route>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="*">
          <NotMatch></NotMatch>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
