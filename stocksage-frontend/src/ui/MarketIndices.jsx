import React from "react";
import { useQuery } from "react-query";
import getMarketSummary, { getMarketIndices } from "../services/apimarket";

function MarketIndices() {
  const { data, isLoading, isError } = useQuery("MarketIndices", () =>
    getMarketIndices()
  );
  return (
    <div class="stockSnap stockSnap--mp">
      <h3 class="componentTitle mb-5">Market Indices</h3>
      <div className="marketInfoTitle">As On</div>
      <div className="MarketInformation__table">
        <table>
          <thead>
            <tr>
              <td>Index</td>
              <td>Open</td>
              <td>High</td>
              <td>Low</td>
              <td>Close</td>
              <td>PointChange</td>
              <td>PercentChange</td>
              <td>Turnover</td>
            </tr>
          </thead>
          {data?.map((item) => {
            return (
              <tr>
                <td>{item.Index}</td>
                <td>{item.Open}</td>
                <td>{item.High}</td>
                <td>{item.Low}</td>
                <td>{item.Close}</td>
                <td>{item.PointChange}</td>
                <td>{item.PercentChange}</td>
                <td>{item.Turnover}</td>
              </tr>
            );
          })}
        </table>
      </div>
    </div>
  );
}

export default MarketIndices;
