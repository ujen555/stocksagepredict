import React from 'react'
import { useQuery } from 'react-query';
import getMarketSummary, { getSubIndices } from '../services/apimarket';

function SubIndices() {
    const { data, isLoading, isError } = useQuery('SubIndices',()=>getSubIndices() );
  return (
    <div class="stockSnap stockSnap--mp">
    <h3 class="componentTitle mb-5">Sub Indices</h3>
    <div className="MarketInformation__table">
        <table>
            <thead>
                <tr>
                    <td>
                    Sub Index
                    </td>
                    <td>
                    Open
                    </td>
                    <td>
                    High 
                    </td>
                    <td>
                    Low
                    </td>
                    <td>
                    Close
                    </td>
                    <td>
                    Point
                    </td>
                    <td>
                    % Change
                    </td>
                    <td>
                    Turnover
                    </td>
                </tr>
            </thead>
            {data?.map(item=>{
                return  <tr>
               <td>
                {item["Sub Index"]}
               </td>
               <td>
                {item["Open"]}
               </td>
               <td>
                {item["High"]}
               </td>
               <td>
                {item["Low"]}
               </td>
               <td>
                {item["Close"]}
               </td>
               <td>
                {item["Point"]}
               </td>
               <td>
                {item["% Change"]}
               </td>
               <td>
                {item["Turnover"]}
               </td>
            </tr>
            })}
        </table>
    </div>
</div>
  )
}

export default SubIndices