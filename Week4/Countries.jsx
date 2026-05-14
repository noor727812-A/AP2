import { useState, useEffect } from 'react'
import axios from 'axios'

const Countries = () => {
  const [query, setQuery] = useState('')
  const [countries, setCountries] = useState([])

  // جلب كل الدول عند بداية التشغيل لتسهيل الفلترة
  useEffect(() => {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => {
        setCountries(response.data)
      })
  }, [])

  const countriesToShow = query
    ? countries.filter(c => c.name.common.toLowerCase().includes(query.toLowerCase()))
    : []

  return (
    <div>
      <div>
        find countries: <input value={query} onChange={(e) => setQuery(e.target.value)} />
      </div>

      <div>
        {countriesToShow.length > 10 && (
          <p>Too many matches, specify another filter</p>
        )}

        {countriesToShow.length <= 10 && countriesToShow.length > 1 && (
          countriesToShow.map(c => <p key={c.cca3}>{c.name.common}</p>)
        )}

        {countriesToShow.length === 1 && (
          <div>
            <h1>{countriesToShow[0].name.common}</h1>
            <p>capital: {countriesToShow[0].capital}</p>
            <p>area: {countriesToShow[0].area}</p>
            <h3>languages:</h3>
            <ul>
              {Object.values(countriesToShow[0].languages).map(l => <li key={l}>{l}</li>)}
            </ul>
            <img src={countriesToShow[0].flags.png} alt="flag" width="150" />
          </div>
        )}
      </div>
    </div>
  )
}

export default Countries