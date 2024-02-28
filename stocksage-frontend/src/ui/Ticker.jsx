import { FaChevronDown, FaChevronUp } from "react-icons/fa6";
import getStockLive from "../services/apiStockLive";
import { useQuery } from "react-query";
import Spinner from "./Spinner";

function Ticker() {
  const {
    data: stocks,
    isLoading,
    isError,
  } = useQuery("stockLive",()=> getStockLive( {
    page: 1,
    limit: 8,
  }),{ refetchInterval: false});
  if (isLoading) {
    return <Spinner></Spinner>;
  }
  if(isError){
    return false;
  }
  return (
    <div className="marquee">
      <div className="marquee__wrapper">
        {stocks?.map((item) => {
          return (
            <div className="marquee__item" key={item.Symbol}>
              <div className="marquee__item__label">{item.Symbol}</div>
              <div className="marquee__item__ltp">{Number(item.CompanyPrice
).toFixed(2)}</div>
              <div className="marquee__item__totalQuantity">({item.Volume.replace(/^\s+|\s+$/g, '')})</div>
             
                {item.CompanyPercent.replace(/^\s+|\s+$/g, '').includes("-")?
                <>
                  <div className="marquee__item__changeAmount marquee__item__changeAmount--down">
                  {item.CompanyPercent.replace(/^\s+|\s+$/g, '')}
                  </div>
                  <FaChevronDown className="icon icon--down" />
                </>
                :  <>
                <div className="marquee__item__changeAmount marquee__item__changeAmount--up">
                {item.CompanyPercent.replace(/^\s+|\s+$/g, '')}
                </div>
                <FaChevronUp className="icon icon--up" />
              </>
                }
       
             
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Ticker;
