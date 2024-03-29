import { useEffect, useState } from "react";
import axios from "axios"
import  CurrencyInputs from "./components/CurrencyInputs"
const API_key = "4zkVzAj31pC85bm7YQRiOJ8EprU1UX0";
const currency_API = `https://api.apilayer.com/fixer/latest?base=USD&apikey = ${API_key}`
const App = () => {
  const [currencyRates, setCurrencyRates] = useState([])
  useEffect(()=>{

  axios.get(currency_API).then((response)=>setCurrencyRates(response.data.rates)).catch((error)=>{
    console.log(error);
    setCurrencyRates(null)
  })
  },[])
  return (
    <>
      <div className="main-container">
        <div className="home">
          <h1>Currency Converter</h1>
          <h3>Exchange Rate</h3>
          <CurrencyInputs amount={"1"} currencies = {Object.keys(currencyRates)}/>
          <CurrencyInputs amount={"1"} currencies = {Object.keys(currencyRates)}/>
        </div>
      </div>
    </>
  );
};

export default App;
