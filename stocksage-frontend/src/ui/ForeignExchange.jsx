import React from 'react'
import { useQuery } from 'react-query';
import getMarketSummary, { getForeignExchange } from '../services/apimarket';

function ForeignExchange() {
    const { data, isLoading, isError } = useQuery('ForeignExchange',()=>getForeignExchange() );
  return (
    <div class="stockSnap stockSnap--mp">
    <h3 class="componentTitle mb-5">Foreign Exchange</h3>
    <div className="MarketInformation__table">
        <table>
            <tbody>
            {data?.map(item=>{
                return  <tr key={data.indexOf(item)}>
                <td>{item.currency}</td>
                <td>{item.buy}</td>
                <td>
                    {item.sell}
                </td>
                 </tr>
            })}
            </tbody>
    
        </table>
    </div>
</div>
  )
}

export default ForeignExchange