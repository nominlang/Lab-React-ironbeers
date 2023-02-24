import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
    return (
      <div>
      <img src="src/assets/beers.png" alt="allbeers"/>
            <Link to="/beers"> All Beers </Link>   
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>  
            <img src="src/assets/new-beer.png" alt="new-beer" />
            <Link to="/random-beer"> Random Beer </Link>  
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>     
            <img src="src/assets/random-beer.png" alt="random-beer" />
            <Link to="/new-beer"> New Beer </Link>    
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>   
      </div>
    )
  }


export default Home;