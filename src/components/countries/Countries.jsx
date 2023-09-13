import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import './Countries.css'

const Countries = () => {
    const [countries , setCountries] = useState([]);
    const [markVisited , setMarkVisited] = useState([]);
    const [countryFlag , setCountryFlag] = useState([]);

    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountries(data))
    },[])

    const handleMarkVisited = (country) =>{
        // console.log('mark visited click')
        const newMarkVisited =[...markVisited , country]
        setMarkVisited(newMarkVisited)
    }

    const handleAddFlag = (flag) => {
        const newCountryFlag = [...countryFlag , flag]
        setCountryFlag(newCountryFlag)
    }

    return (
        <div>
            <h2>Countries : {countries.length}</h2>

            <div>
                <h5>Visited countries : {markVisited.length} </h5>
                <ul>
                    {
                        markVisited.map(country => <li key={country.cca3} >{country.name.common}</li>)
                    }
                </ul>
            </div>

            <div>
                <h5>Flag of many countries </h5>
                <div className="flag-container">
                {
                    countryFlag.map((flag , index) => <img key={index} src={flag}></img>)
                }
                </div>
            </div>

           <div className="country-container">
           {
                countries.map(country => <Country
                     key={country.cca3}
                     handleMarkVisited ={handleMarkVisited}
                     handleAddFlag = {handleAddFlag}
                     country={country}></Country>)
            }
           </div>
        </div>
    );
};

export default Countries;