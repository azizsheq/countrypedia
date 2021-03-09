import React, { useEffect, useState } from 'react';
import CountryDetails from '../CountryDetails/CountryDetails';
import DisplayAll from '../DisplayAll/DisplayAll';
import Navigation from '../Navigation/Navigation';

const Home = () => {
    const [countries, setCountries] = useState([]);
    useEffect(() =>{
        const url = 'https://restcountries.eu/rest/v2/all';
        fetch(url)
        .then(res => res.json())
        .then(data => setCountries(data));
    },[]);
    return (
        <div className="container">
            <Navigation/>
            {
                countries.map(countryData => <DisplayAll countryData={countryData} key={countryData.alpha3Code}/>)
            }
        </div>
    );
};

export default Home;