import React, { useState, useEffect } from "react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { CiLogin } from "react-icons/ci";
import { deleteStock, returnFavourites } from "../services/apiFavourites";
import { useMutation } from "react-query";
import { useStocks } from "../contexts/StocksContexts";
import { MdDelete } from "react-icons/md";
function FavouriteStocks() {
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
    <>
    {getUserLogInStatus() ? (
          <div className="stockSnap">
            <h3 className="componentTitle mb-5">Stock Favourites</h3>
            <div className="predictedStockList">
              {favouriteStocks?.favorites.length !== 0
                ? favouriteStocks?.favorites.filter((stock,index) => favouriteStocks?.favorites.indexOf(stock)==index).map((stock)=>{
                 return   <div
                    className="predictedStockList__item box crudBox"
                    
                  >
                <span onClick={() => {
                      navigate(`/company?Symbol=${stock}`);
                    }} className="line">
    {stock}
                </span>
                
                    <MdDelete className="icon"  onClick={()=>handleDelete(stock)}/>
                  </div>
                })
                :  <h3 className="predictedStockList__item box  pleaseLogin">
            No stocks are added to favourites
   
              </h3>}
        
            </div>
          </div>
        ) : (
          <div className="stockSnap">
            <h3 className="pleaseLogin  ">
              Login to check your Favourite Stocks
              <CiLogin
                className="icon"
                onClick={() => {
                  navigate(`/login`);
                }}
              />
            </h3>
          </div>
        )}
    </>
   
  );
}

export default FavouriteStocks;
