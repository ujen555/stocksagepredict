import React, { useEffect, useState } from "react";
import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";
import { useStocks } from "../contexts/StocksContexts";
import { useSearchParams } from "react-router-dom";
import { useQuery } from "react-query";
import { getAllStockHistory, getStockBySymbol } from "../services/apiStockLive";
import Spinner from "./Spinner";
import Indicators from "highcharts/indicators/indicators-all.js";
import DragPanes from "highcharts/modules/drag-panes.js";
import AnnotationsAdvanced from "highcharts/modules/annotations-advanced.js";
import PriceIndicator from "highcharts/modules/price-indicator.js";
import FullScreen from "highcharts/modules/full-screen.js";
import StockTools from "highcharts/modules/stock-tools.js";


Indicators(Highcharts);
DragPanes(Highcharts);
AnnotationsAdvanced(Highcharts);
PriceIndicator(Highcharts);
FullScreen(Highcharts);
StockTools(Highcharts);


function StockHistoryChart() {
  const [searchParams] = useSearchParams();
  const symbol = searchParams.get("Symbol");
  const [stocksymbol, setStockSymbol] = useState();
  const { selectedStock, getSelectedStock } = useStocks();

  const {
    data: stock,
    isLoading,
    isError,
  } = useQuery("stockDataBySymbol", () => getStockBySymbol(symbol), {
    refetchInterval: false,
  });

  const {
    data: stockHistory,
    isLoading: isLoadingHistory,
    isError: isErrorHistory,
  } = useQuery("stockHistory", () => getAllStockHistory(symbol), {
    refetchInterval: false,
  });

  useEffect(
    function () {
      if (symbol) {
        setStockSymbol(symbol);
      }
      if (stock) {
        getSelectedStock(stock[0]);
      }
    },
    [symbol, selectedStock, stock]
  );

  const seriesData = stockHistory
    ? stockHistory.map((item) => [
        new Date(`${item.Date}T00:00:00`).getTime(),
        parseFloat(item.LTP?.replace(",", "") ?? 0),
      ])
    : [];

  const options = {
    chart: {
      zoomType: "x",
      backgroundColor: "#f5ecdb",
    },
    title: {
      text: selectedStock ? selectedStock.Symbol : "",
      align: "left",
      style: {
        color: "#005249",
      },
    },
    subtitle: {
      text: "",
      align: "left",
      style: {
        color: "#005249",
      },
    },
    
    xAxis: {
      type: "datetime",
      title: {
        text: "Date",
        style: {
          color: "#005249",
        },
      },
      labels: {
        style: {
          color: "#005249",
        },
      },
    },
    yAxis: [
      {
        title: {
          text: "LTP",
          style: {
            color: "#005249",
          },
        },
        labels: {
          style: {
            color: "#005249",
          },
        },
      },
    ],
    legend: {
      enabled: false,
    },
  
    series: [
      {
        type: "area",
        name: "LTP",
        color: "#FBC404",
        data: seriesData,
      },
    ]

  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div >
      {stockHistory?.length > 0 ? null : (
        <div className="pleaseLogin">No stock history found</div>
      )}
   
      <div className="simps">
        
          <HighchartsReact
            highcharts={Highcharts}
            constructorType={"stockChart"}
            options={options}
          />
      </div>
    </div>
  );
}

export default StockHistoryChart;
