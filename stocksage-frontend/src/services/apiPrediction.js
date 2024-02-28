
export default async function getPredictionByStockSymbol() {
    const url="http://localhost/stocksage-api/compare.php";

    const options = {   
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
   
    };
    
    try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);
        return result;
    } catch (error) {
        console.error(error);
    }
  }



