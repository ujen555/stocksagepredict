import React, { useEffect } from 'react'
import { useStocks } from '../contexts/StocksContexts'
import StockHistoryChart from './StockHistoryChart';
import { MdFavorite } from "react-icons/md";
import { useMutation } from 'react-query';
import { addStockToFavourite, returnFavourites } from '../services/apiFavourites';
import { ToastContainer, toast } from 'react-toastify';
function StockSnap() {
    const  {selectedStock,getUserLogInStatus}=useStocks();
    const sessionId=localStorage.getItem('sessionID');
   
 

 const mutation = useMutation((symbol) => {
        return addStockToFavourite(symbol,localStorage.getItem('sessionID'));
    }, {
        onSuccess: (data) => {
          if(data.success){
            toast(`${selectedStock?.Symbol} ${data.message}`);
          
          }
        }
    });

    const onAddFavouriteStock = (symbol) => {
        mutation.mutate(symbol );
        
    };
  return (
    <div className="stockSnap ">
     <ToastContainer position="bottom-right" />
        <div className="stockSnap__header">
            <div className="stockSnap__title">
                {selectedStock?.Name}
               <span>({selectedStock?.Symbol})</span>
            </div>
            {
                getUserLogInStatus()?  <button className="stockSnap__addToFav" onClick={()=>{
                    onAddFavouriteStock(selectedStock?.Symbol)
                }}>
                    Add To Favourites <MdFavorite />
                </button>:<button className="stockSnap__addToFav" disabled="true">
                    Add To Favourites <MdFavorite />
                </button>
            }
          
        </div>
        <div className="stockSnap__bar">
            <div className="stockSnap__bar__item">
                Sector: {selectedStock?.sector}
            </div>
            |
            <div className="stockSnap__bar__item">
            Status: {selectedStock?.status}
            </div>
            |
            <div className="stockSnap__bar__item">
            Instrument: {selectedStock?.instrument}
            </div>
            |
            <a className="stockSnap__website">
                Website:    
                <span>{selectedStock?.website?selectedStock?.website:"Not Found"}</span>
            </a>
            |
            <a className="stockSnap__website">
                Email:    
                <span>{selectedStock?.email}</span>
            </a>
         
        </div>
       
        <div className="stockSnap__stats mb-5">
            <div className="stockSnap__stats__item">
                <div className="stockSnap__stats__item__title">
                    {selectedStock?.CompanyPrice}
                </div>
                <div className="stockSnap__stats__item__value">
                    {selectedStock?.CompanyRatio}({selectedStock?.CompanyPercent})
                </div>
            </div>
            <div className="stockSnap__stats__item">
                <div className="stockSnap__stats__item__title">
                Open
                </div>
                <div className="stockSnap__stats__item__value">
              {selectedStock?.Open}
                </div>
            </div>
            <div className="stockSnap__stats__item">
                <div className="stockSnap__stats__item__title">
                High
                </div>
                <div className="stockSnap__stats__item__value">
                {selectedStock?.High}
                </div>
            </div>
            <div className="stockSnap__stats__item">
                <div className="stockSnap__stats__item__title">
                Low
                </div>
                <div className="stockSnap__stats__item__value">
                {selectedStock?.Low}
                </div>
            </div>
            <div className="stockSnap__stats__item">
                <div className="stockSnap__stats__item__title">
                Volume  
                </div>
                <div className="stockSnap__stats__item__value">
             {selectedStock?.Volume}
                </div>
            </div>
        </div>

        <StockHistoryChart></StockHistoryChart>
    </div>
  )
}

export default StockSnap