import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import getStockLive from "../services/apiStockLive";
import { useQuery } from "react-query";
import SearchResults from "./SearchResults";
import { useStocks } from "../contexts/StocksContexts";

function SearchStock() {
  const {
    data: stockNamesList,
    isLoading,
    isError,
  } = useQuery("stockLives", () => getStockLive({
    page: 1,
    limit: 1000,
  }));
  


  const { searchResults, getSearchResults } = useStocks();

  function handleChange(value) {
    if (!isLoading && !isError) {
      const results = stockNamesList.filter((item) => {
        return (
          value && item && item.Symbol && item.Symbol.toLowerCase().includes(value.toLowerCase())
        );
      });
      console.log("this result",results);

      if(results.length){
        getSearchResults(results);
      }
      else{
        getSearchResults([])
      }
    }
  }
  return (
    <div className="stockSearch">
      <img src="public/jumbotron.9c1dd92b58a34d44.svg" alt="" className="bg-image"/>
      <div className="content">
        <div className="stockSearch__title">Search <span>Stocks</span></div>
        <div className="inputControl"  onBlur={()=>getSearchResults([])}>
          <div className="input__wrapper">
            <input
              type="text"
              className="input"
              onChange={(e) => handleChange(e.target.value)}
              onFocus={(e) => handleChange(e.target.value)}
             
            />
            <CiSearch className="inputControl__icon" />
          </div>
          {searchResults ? 
            <SearchResults ></SearchResults>
           : null}
        </div>
      </div>
    </div>
  );
}

export default SearchStock;
