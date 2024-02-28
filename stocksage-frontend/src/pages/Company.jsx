import React, { useState, useEffect } from "react";
import StockSnap from "../ui/StockSnap";
import StockHistoryChart from "../ui/StockHistoryChart";
import NewsComponent from "../ui/NewsComponent";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import PredictionSlice from "../ui/PredictionSlice";
import { useStocks } from "../contexts/StocksContexts";
import FavouriteStocks from "../ui/FavouriteStocks";
import Predictionlist from "../ui/Predictionlist";

function Company() {
    const navigate = useNavigate();
    const location = useLocation();
    const [key, setKey] = useState(0);
    const { selectedStock } = useStocks();

    useEffect(() => {
        setKey(key => key + 1);
    }, [location.key]);

    return (
        <main key={key}>
            <div className="introduce mb-5">
                <StockSnap></StockSnap>
                    <div className="stockSnap mb-5">
                        <h3 className="componentTitle mb-5">
                            Predicted Stock Data
                        </h3>
                        <div className="overflow">
                            <Predictionlist></Predictionlist>
                        </div>
                    </div>
                   
                </div>
      <PredictionSlice></PredictionSlice>
          
            <NewsComponent></NewsComponent>
        </main>
    );
}

export default Company;
