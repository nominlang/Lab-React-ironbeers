import React from 'react';
import { Divider } from 'antd';
import { useState } from 'react';


function Search({ filterBeer }) {

    const [searchQuery, setSearchQuery] = useState('');
  
    const handleInput = event => {
      setSearchQuery(event.target.value);
      filterBeer(event.target.value);
    }

  return (
    <div>
    <Divider>Search</Divider>
    <input type="text" value={searchQuery} onChange={handleInput} />
    </div>   
  ); 
}


export default Search;