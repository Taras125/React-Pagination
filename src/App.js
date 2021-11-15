import React, { useState, useEffect } from 'react'
import './App.css';
import Items from './Items';
import Pagination from './Pagination';

function App() {
  const [coctails, setCoctails] = useState([])
  const [loading, setLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [coctailPerPage] = useState(8)

  useEffect(() => {
    const getCoctails = async () => {
      setLoading(true)
      const reg = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail`)
      const res = await reg.json()
      setCoctails(res.drinks)
      setLoading(false)
    }
    getCoctails()
  }, [])

  //Get current posts
  const indexOfLastCoctails = currentPage * coctailPerPage
  const indexOfFirstCoctails = indexOfLastCoctails - coctailPerPage
  const currentCoctails = coctails.slice(indexOfFirstCoctails, indexOfLastCoctails)

  //Change page function
  const paginate = pageNumber => setCurrentPage(pageNumber)

  return (
    <div className="container">
      <div className="title">
        <h1>Cocktail bar</h1>
      </div>
      <div>
        <Pagination
          coctailPerPage={coctailPerPage}
          totalCoctails={coctails.length}
          paginate={paginate}
        />
      </div>
      <div className="item">
        {currentCoctails.map((item) => (
          <Items
            loading={loading}
            key={item.idDrink}
            name={item.strDrink}
            images={item.strDrinkThumb}
          />
        ))}
      </div>

    </div>
  );
}

export default App;
