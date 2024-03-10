import React from 'react'
import { useQuery } from 'react-query';
import getMarketSummary from '../services/apimarket';

function MarketSummary() {
    const { data, isLoading, isError } = useQuery('marketSummary',()=>getMarketSummary() );
  return (
    <div class="stockSnap stockSnap--mp">
    <h3 class="componentTitle mb-5">Market Summary</h3>
    <div className="marketInfoTitle">
        As On

    </div>
    <div className="MarketInformation__table">
        <table>
            {data?.map(arr=>{
                return  <tr>
                <td>{arr[0]}</td>
                <td>{arr[1]}</td>
            </tr>
            })}
        </table>
    </div>
</div>
  )
}

export default MarketSummary