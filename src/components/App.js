// import './App.css';
import React from 'react';
import { Route, Switch } from 'react-router-dom'
import Header from './Header'
import ProductPage from './ProductPage';
import NavBar from './NavBar';
import Brands from './Brands';
import Brand from './Brand';

function App() {

  return (
    <div className="app">
      <Header />
      <NavBar />
      <Switch>
        <Route exact path="/brands">
          <Brands />
        </Route>
        <Route path="/brands/:id">
          <Brand />
        </Route>
        <Route exact path="/">
          {/* <ProductPage /> */}
        </Route>
      </Switch>

    </div>
  );
}

export default App;
