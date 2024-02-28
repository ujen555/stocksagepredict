import React, { useState, useEffect } from "react";
import StockSnap from "../ui/StockSnap";
import StockHistoryChart from "../ui/StockHistoryChart";
import NewsComponent from "../ui/NewsComponent";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { CiLogin } from "react-icons/ci";
import { deleteStock, returnFavourites } from "../services/apiFavourites";
import { useMutation, useQuery } from "react-query";
import { useStocks } from "../contexts/StocksContexts";
import { MdDelete } from "react-icons/md";
import FavouriteStocks from "../ui/FavouriteStocks";
import getPredictionByStockSymbol from "../services/apiPrediction";
import Predictionlist from "../ui/Predictionlist";
function Prediction() {
  const navigate = useNavigate();
  const location = useLocation();
  const [key, setKey] = useState(0);
  const sessionId = localStorage.getItem("sessionID");
  const [favouriteStocks, setFavouriteStocks] = useState();
  const  {getUserLogInStatus}=useStocks();

  useEffect(() => {
    setKey((key) => key + 1);
    mutation.mutate();
  }, [location.key, sessionId]);

  const {
    data: stockPredictionData,
    isLoading,
    isError,
  } = useQuery("stockPredictionData", () => getPredictionByStockSymbol(), {
    refetchInterval: false,
  });

  const mutation = useMutation(
    () => {
      return returnFavourites(sessionId);
    },
    {
      onSuccess: (data) => {
        if (data.success) {
          setFavouriteStocks(data);
        }
        else{
            setFavouriteStocks(null)
        }
      },
    }
  );

  const deleteMutation = useMutation((symbol) => {
    return deleteStock(symbol,sessionId);
}, {
    onSuccess: (data) => {
        console.log("deleted");
        mutation.mutate();
    }
});

const handleDelete = (stock) => {
    console.log("tring to delete");
    deleteMutation.mutate(stock);
    
};

  return (
    <main key={key}>
      <div className="predictionGrid">
        <div className="stockSnap ">
          <h3 className="componentTitle mb-5">Predicted Stock Data</h3>
          <Predictionlist></Predictionlist>
        </div>
        <FavouriteStocks>   </FavouriteStocks>
      </div>
    </main>
  );
}

export default Prediction;
