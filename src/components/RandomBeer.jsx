import React from 'react';
import NavBar from './NavBar';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';


function RandomBeer() {
  const {id} = useParams ()
  const [beer, setBeer] = useState ({})

  useEffect(() => {
      async function fetchBeer () {
          const response = await axios.get(`https://ih-beers-api2.herokuapp.com/beers/random`)
          setBeer(response.data)
      }
      fetchBeer()
  }, [id])


  return (
    <div>
    <NavBar />
              <img style={{ height: "250px" }} src={beer.image_url} alt='{beer.name}'></img>
              <h3>{beer.name}</h3>
              <p>{beer.tagline}</p>
              <p>{beer.first_brewed}</p>
              <p>{beer.attenuation_level}</p>
              <p>{beer.description}</p>
              <p>Created by:{beer.contributed_by}</p>
        </div>
      )
    }

export default RandomBeer;