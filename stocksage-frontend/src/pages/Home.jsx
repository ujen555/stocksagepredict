import React, { useEffect } from "react";
import SearchStock from "../ui/SearchStock";
import StockTable from "../ui/StockTable";
import ComponentHeader from "../ui/ComponentHeader";
import NewsComponent from "../ui/NewsComponent";
import { ToastContainer, toast } from "react-toastify";
import { useStocks } from "../contexts/StocksContexts";
import FavouriteStocks from "../ui/FavouriteStocks";

function Home() {
  const { toastMessage } = useStocks();

  useEffect(() => {
    if (toastMessage) {
      console.log("losfsa", toastMessage);
      toast(toastMessage);
    }
  }, [toastMessage]);
  return (
    <div className="serachBox ">
      <SearchStock></SearchStock>
      <main>
        <ToastContainer position="bottom-right" />

        <div className="box mb-5">
          <ComponentHeader title="Stock List"></ComponentHeader>
          <StockTable></StockTable>
        </div>
        <div className="griddyfav mb-5">
          <div className="box ">
            <ComponentHeader title="Introduction"></ComponentHeader>
            <p>
              Stocksage is a sophisticate­d and versatile financial analysis
              platform that enable­s investors and traders to navigate the­
              complex world of stock markets effortle­ssly. By leveraging machine
              le­arning, it analyzes historical data, identifies patte­rns, and
              provides insights for predicting future stock price­s. With its easy
              to use interface and available data re­sources, Stocksage simplifies
              stock re­search, market trend monitoring, and facilitate­s
              well-informed investme­nt decision-making. It is an invaluable asset
              for both investors and trade­rs alike. Its comprehensive­ set of
              features e­mpowers users to make data-drive­n decisions,
              effective­ly manage their portfolios, and optimize the­ir trading
              strategies.
            </p>
            <p>
              A stock market is a place where people can buy and sell shares of
              listed companies. These shares, also known as equities, represent
              ownership in the company. The stock exchange acts as a middleman
              facilitating the buying and selling process. The stock market is an
              ecosystem that is influenced by various factors such as economic
              indicators, company performance, geopolitical events and market
              sentiment. Predicting stock market movements involves trying to
              estimate the value of a company's stock or other financial
              instruments traded on an exchange. Investors and traders are highly
              interested in predictions of stock prices and market trends to make
              decisions.
            </p>
          </div>
          <div className="box">
            <FavouriteStocks></FavouriteStocks>
          </div>
        </div>
        <div className="box">
          <NewsComponent></NewsComponent>
        </div>
      </main>
    </div>
  );
}

export default Home;
