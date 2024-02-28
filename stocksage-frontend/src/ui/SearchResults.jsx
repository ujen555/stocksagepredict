import React from "react";
import { useStocks } from "../contexts/StocksContexts";
import { useNavigate } from "react-router-dom";

function SearchResults() {
  const { searchResults, getSelectedStock, selectedStock,getSearchResults } = useStocks();
  const navigate=useNavigate();
  function handleStockselect(item){
    console.log("Item clicked:", item);
    getSelectedStock(item);
    getSearchResults([]);
    navigate(`/company?Symbol=${item.Symbol}`);
  }
  if (searchResults.length) {
    return (
      <div className="searchResult__block" >
        {searchResults.map((item) => {
          return (
            <div
              className="searchResult__item"
              key={item.Symbol}
              onMouseDown ={() => handleStockselect(item)}
            >
              {item.Symbol}
            </div>
          );
        })}
      </div>
    );
  }
  return null;
}

export default SearchResults;
