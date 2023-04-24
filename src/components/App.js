import React, {useState, useEffect} from 'react';
import { Route, Switch } from 'react-router-dom'
import Header from './Header'
import NavBar from './NavBar';
import Brands from './Brands';
import Brand from './Brand';

function App() {
  const [brands, setBrands] = useState([])

  useEffect(() => {
      fetch("http://localhost:9292/brands")
      .then(res => res.json())
      .then(data => setBrands(data))
  }, [])

  function handleAddNewBrand(newBrand){
    setBrands([...brands, newBrand])
}

  console.log(brands)
  return (
    <div className="app">
      <Header />
      <NavBar />
      <Switch>
        <Route exact path="/brands">
          <Brands brands={brands} onAddNewBrand={handleAddNewBrand}/>
        </Route>
        <Route path="/brands/:id">
          <Brand brands={brands} setBrands={setBrands}/>
        </Route>
        <Route exact path="/">
          
        </Route>
      </Switch>

    </div>
  );
}

export default App;