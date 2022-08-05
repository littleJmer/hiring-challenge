import { useState, useEffect } from 'react'
import './App.css'

import ProductHeader from './components/productHeader';
import SalesData from './components/salesData';
import Loading from './components/loading';

function App() {
  const [searchBy, setSearchBy] = useState(undefined);
  const [data, setData] = useState({});
  const [fetching, setFetching] = useState(false);

  useEffect(() => {
    if (searchBy) {
      fetchData();
    }
  }, [searchBy]);

  const fetchData = () => {
    setFetching(true);
    fetch(`http://localhost:8080/v1/dashboard/mostPopularProduct?by=${searchBy}`)
      .then(response => {
        if (response.ok)
          return response.json();
        throw response
      })
      .then(data => setData(data.data))
      .catch(error => {
        console.log(error);
      })
      .finally(() => setFetching(false))
  }

  return (
    <div className="App">
      <h1>Most Popular Product</h1>
      <p>
        Please select an option.<br />If you want to see the most sold product (popular) or with higher sales (gross sales).
      </p>
      <div className="card">
        <button className={searchBy === "Sales" ? "activeButton" : ""} onClick={() => setSearchBy("Sales")}>
          popular
        </button>
        <button className={searchBy === "Amount" ? "activeButton" : ""} onClick={() => setSearchBy("Amount")}>
          gross sales
        </button>
      </div>
      <div className='card'>
        <Loading isLoading={fetching} />
        <ProductHeader data={data} searchBy={searchBy} />
        <SalesData sales={data.Sales} />
      </div>
      <p className="read-the-docs">
        Engineering Hiring Challenge - GBG
      </p>
    </div >
  )
}

export default App
