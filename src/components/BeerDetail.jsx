import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import NavBar from './NavBar';
import 'bootstrap/dist/css/bootstrap.css';

  function BeerDetail() {
    const {id} = useParams ()
    const [beer, setBeer] = useState ({})

    useEffect(() => {
        async function fetchBeer () {
            const response = await axios.get(`https://ih-beers-api2.herokuapp.com/beers/${id}`)
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

  
  export default BeerDetail;

