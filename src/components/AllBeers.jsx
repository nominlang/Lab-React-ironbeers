import React from 'react';
import NavBar from './NavBar';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css'

function AllBeers() {
  const [allBeers, setAllBeers] = useState([])

  const fetchData = async () => {
    const response = await axios.get('https://ih-beers-api2.herokuapp.com/beers')
    setAllBeers(response.data)
  }

  useEffect(() => {
    fetchData()
  }, [])

  useEffect(() => {
    console.log(allBeers)
  }, [allBeers])

  return (
    <div className='App'>
     <NavBar />
      {allBeers.map(beer => (
        <div style={{ border: '1px solid white', borderRadius: '12px', marginBottom: '1rem' }}>
          <img src={beer.image_url} alt='some beer' style={{ height: '100px' }} />
          <Link to={`/beers/${beer._id}`}>
          <h3>{beer.name}</h3>
          </Link>
          <h4>{beer.tagline}</h4>
          <h5>Contributed by: {beer.contributed_by}</h5>
        </div>
      ))}
    </div>
  )
}

export default AllBeers;