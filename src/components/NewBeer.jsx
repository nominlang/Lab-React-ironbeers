import React from 'react';
import NavBar from './NavBar';
import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css';



const NewBeer = ({ fetchData }) => {
  const [name, setName] = useState('')
  const [tagline, setTagline] = useState('')
  const [description, setDescription] = useState('')
  const [first_brewed, setFirst_brewed] = useState('')
  const [brewers_tips, setBrewers_tips] = useState('')
  const [attenuation_level, setAttenuation_level] = useState('')
  const [contributed_by, setContributed_by] = useState('')

  const handleSubmit = async event => {
    event.preventDefault()
    const newBeer = { name, tagline, description, first_brewed, brewers_tips, attenuation_level, contributed_by }

    const response = await fetch('https://ih-beers-api2.herokuapp.com/beers/new', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newBeer),
    })
    const parsed = await response.json()
    console.log(parsed)

    fetchData()

    setName('')
    setTagline('')
    setDescription('')
    setFirst_brewed('')
    setBrewers_tips('')
    setAttenuation_level('' )
    setContributed_by('')

  }


  return (
    <>
   <NavBar />
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column' }}>
      <h6>Name</h6> 
        <input type='text' value={name} onChange={event => setName(event.target.value)} />
      <h6>Tagline</h6>
        <input type='text' value={tagline} onChange={event => setTagline(event.target.value)} />
      <h6>Description</h6>
        <input class='description' type='text' value={description} onChange={event => setDescription(event.target.value)} />
      <h6>First Brewed</h6>
        <input type='text' value={first_brewed} onChange={event => setFirst_brewed(event.target.value)} />
      <h6>Brewers Tips</h6>
        <input type='text' value={brewers_tips} onChange={event => setBrewers_tips(event.target.value)} />
      <h6>Attenuation Level</h6>
        <input
          type='number'
          value={attenuation_level}
          onChange={event => setAttenuation_level(event.target.value)}
          step='1'
        />
      <h6> Contributed By:</h6>
        <input type='text' value={contributed_by} onChange={event => setContributed_by(event.target.value)} />
      <button class='newBeerBtn' type='submit'>ADD NEW</button> 
    
    </form>
  </>
)
}

export default NewBeer;