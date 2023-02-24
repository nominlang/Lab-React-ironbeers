import { useEffect, useState } from 'react';
import './App.css';
import Home from './components/Home';
import { Routes, Route } from 'react-router-dom';
import AllBeers from './components/AllBeers';
import RandomBeer from './components/RandomBeer';
import NewBeer from './components/NewBeer';
import BeerDetail from './components/BeerDetail';


function App() {
  

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/beers' element={<AllBeers />} />
        <Route path='/random-beer' element={<RandomBeer />} />
        <Route path='/new-beer' element={<NewBeer />} />
        <Route path='/beers/:id' element={<BeerDetail />} />
        <Route path='*' element={'Error 404: Not Found'}/>
      </Routes>
    </div>
  );
}

export default App;
