import React from "react";
import MarketSummary from "../ui/MarketSummary";
import MarketIndices from "../ui/MarketIndices";
import ForeignExchange from "../ui/ForeignExchange";
import SubIndices from "../ui/SubIndices";
import ImpactScripts from "../ui/ImpactScripts";



function MarketInformation() {

   
  return (
    <main>
        <div class="box flex-tb">
           <MarketSummary></MarketSummary>
           <MarketIndices></MarketIndices>
           <SubIndices></SubIndices>
           <ForeignExchange></ForeignExchange>
           <ImpactScripts></ImpactScripts>
         </div>
    </main>
  );
}

export default MarketInformation;
