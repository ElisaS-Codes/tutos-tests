import { useState, useEffect } from 'react'
import axios from 'axios';

const CountryEntry = ({name}) => ( <li>{name}</li> )

const CountryInfo = ({country}) => (
  <div>
    <h1>{country.name.common}</h1>
    <p>
      Flag: {country.Flag} <br />
      Population: {country.population} <br />
      Is part of the UN: {country.unMember ? "Yes" : "No"} <br />
      Capital: {country.capital[0]} <br />
    </p>
  </div>
)

const CountryDiv = ({countryList}) => {

  console.log(countryList.length);
  
  if (countryList.length >10) return <p>Too Many countries</p>
  else if (countryList.length === 0) return <p>No Matches</p>
  else if (countryList.length === 1) return <CountryInfo country={countryList[0]} />
  else return (
      <ul>
      {countryList.map((country) => 
        <CountryEntry key={country.name.common} name={country.name.common} />
      )}
      </ul>
  )
}


function App() {
  const [ countries, setCountries] = useState([])
  const [ search, setSearch ] = useState("Argentina")
  const handleSearchChange = (event) => setSearch(event.target.value)

  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all")
      .then(response => setCountries(response.data))
  },[])

  const countriesMatch = countries.filter(countrie => 
    countrie.name.common.toUpperCase().search(search.toUpperCase()) > -1
    )

  console.log(countriesMatch);

  return (
   <div>
     Find country: <input value={search} onChange={handleSearchChange} />
    <div>
      <CountryDiv countryList={countriesMatch} />
    </div>
   </div> 

  )
}

export default App;
