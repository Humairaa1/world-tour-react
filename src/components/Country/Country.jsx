import { useState } from 'react';
import './Country.css'

const Country = ({country , handleMarkVisited , handleAddFlag}) => {
    console.log(country);
    const {name , flags , area ,population} = country;

    const [visited , setVisited] =useState(false);

    const handleVisited =() =>{
        setVisited(!visited)
    }

    

    return (
        <div className={`country ${visited && 'visited'}`}>
           <h3 style={{color : visited ? 'red' : 'black'}}>Name : {name?.common} </h3>
           <h4>Official Name : {name?.official}</h4>
           <img src={flags.png} alt="" /> 
           <p>Area : {area} </p>
           <p>Population : {population} </p>

           <button onClick={handleVisited}> {visited ? 'visited':'not Visited'} </button><br />

           <button style={{marginTop: '5px'}} onClick={()=>handleMarkVisited(country)}>Mark Visited</button> <br />

           <button onClick={() => handleAddFlag(country.flags.png)}>Add Flag</button> <br />

           {
            visited ? 'I am visited here' :'I want to visit'
           }
        </div>
    );
};

export default Country;