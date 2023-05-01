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
          <div className='home'>
            <h1><big>🎆Holiday Shopping Week🎆</big></h1>
            <br />
            <br />
            <h2>&#127775;<i>Up To 50% Off For All Items and Lots of Gifts For New Members Who Register This Week </i>&#127873;</h2>
            <br />
            <br />
            <h3>Free Standard Shipping On $50+ Orders &#128666;</h3>
          </div>
        </Route>
      </Switch>

    </div>
  );
}

export default App;