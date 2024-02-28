import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

const StockContext = createContext();

function StockProvider({ children }) {
    const [searchResults, setSearchResults] = useState([]);
    const [selectedStock,setSelectedStock]=useState({});
    const [loggedInStatus,setLoggedInStatus]=useState(false);
    const [toastMessage, setToastMessage] = useState('');


    function showToast(message) {
      setToastMessage(message);
    
  }

  function hideToast() {
      setToastMessage('');
  }

 
    function setUserLogInStatus(bool){
      setLoggedInStatus(bool)
    }
    function getUserLogInStatus(bool){
      return loggedInStatus;
    }

    function getSearchResults(result){
        setSearchResults(result);
    }

    function getSelectedStock(item){
        setSelectedStock(item);
    }
  return (
    <StockContext.Provider value={{ searchResults, getSearchResults, selectedStock, getSelectedStock ,getUserLogInStatus ,setUserLogInStatus,  showToast,
      hideToast,
      toastMessage
      }}>
      {children}
    </StockContext.Provider>
  );
}

function useStocks(){
    const context=useContext(StockContext);
    if(context===undefined){
     console.log("only use constext inside the provider");
     return false;
    }
    return context;
  }
export {StockProvider,useStocks};