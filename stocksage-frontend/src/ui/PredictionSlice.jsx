import React from "react";
import { useQuery } from "react-query";
import getPredictionByStockSymbol from "../services/apiPrediction";
import Spinner from "./Spinner";
import { FaFolderOpen } from "react-icons/fa6";
import { PiCellSignalHighBold } from "react-icons/pi";
import { PiWifiLowLight } from "react-icons/pi";
import { AiOutlineStock } from "react-icons/ai";
import { FaArrowDownLong } from "react-icons/fa6";
import { useStocks } from "../contexts/StocksContexts";
import { SiBitcoinsv } from "react-icons/si";
function PredictionSlice() {
  const {
    data: stockPredictionData,
    isLoading,
    isError,
  } = useQuery("stockPredictionData", () => getPredictionByStockSymbol(), {
    refetchInterval: false,
  });
  const { selectedStock } = useStocks();
  return (
    <div className="stockSnap mb-5">
      <h3 className="componentTitle mb-5">Prediction</h3>
      <div className="PredictionSlice">
        {isLoading ? (
          <Spinner></Spinner>
        ) : (
          <>
          {
            stockPredictionData?.map(stock=>{
            return <>
            <div className={`box`}>
              <div className="PredictionSlice__title"> {stock?.symbol}</div>
              <div className="stock-row">
                <div className="PredictionSlice__header">
                  <div className="icon">
                  <AiOutlineStock></AiOutlineStock>
                  </div>
                  <div className="PredictionSlice__header__content">
                    <div className={`PredictionSlice__value   ${stock.color=="Green" ? 'greenflag' : 'redFlag'}`}>
                    {stock?.symbol}
                    </div>

                  
                  </div>
                </div>
                <div className="PredictionSlice__header">
                  <div className="icon">
                  <SiBitcoinsv />
                  </div>
                  <div className="PredictionSlice__header__content">
                    <div className={`PredictionSlice__value  ${stock.color=="Green" ? 'greenflag' : 'redFlag'}`}>
                      Rs.
                    {stock?.weightedAverage.toFixed(2)}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </>
            })
          }
            
           
          </>
        )}

     
      </div>
    </div>
  );
}

export default PredictionSlice;
