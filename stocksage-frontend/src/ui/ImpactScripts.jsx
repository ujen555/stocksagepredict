import React from 'react'
import { useQuery } from 'react-query';
import getMarketSummary, { getSubIndices, getimpactingScripts } from '../services/apimarket';

function ImpactScripts() {
    const { data, isLoading, isError } = useQuery('getimpactingScripts',()=>getimpactingScripts() );
  return (
    <div class="stockSnap stockSnap--mp">
    <h3 class="componentTitle mb-5">Impact Scripts</h3>
    <div className="MarketInformation__table">
        <table>
          
            {data?.map(item=>{
                return  <tr>
               <td>
                {item[0]}
               </td>
               <td>
                {item[1]}
               </td>
            </tr>
            })}
        </table>
    </div>
</div>
  )
}

export default ImpactScripts;