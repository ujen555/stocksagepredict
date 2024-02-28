import React from 'react'
import { useQuery } from 'react-query';
import getPredictionByStockSymbol from '../services/apiPrediction';
import { useNavigate } from 'react-router-dom';

function Predictionlist() {
    const navigate = useNavigate();
    const {
        data: stockPredictionData,
        isLoading,
        isError,
      } = useQuery("stockPredictionData", () => getPredictionByStockSymbol(), {
        refetchInterval: false,
      });
  return (
    <div className="predictedStockList">
    {
        stockPredictionData?.map(item=>{
            return   <div
            className="predictedStockList__item box"
            onClick={() => {
              navigate(`/company?Symbol=${item?.symbol}`);
            }}
          >
            {item?.symbol}
        
          </div>
        })
    }
  
  </div>
  )
}

export default Predictionlist