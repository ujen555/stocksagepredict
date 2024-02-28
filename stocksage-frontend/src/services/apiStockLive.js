export  async function getStockBySymbol(symbol) {
    const url = `http://localhost/stocksage-api/db.php?symbol=${symbol}`;

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


export  async function getAllStockHistory(symbol) {
    const url = `http://localhost/stocksage-api/historicdata.php`;

    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            symbol:symbol
        }),
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log("sdf",result);
        return result;
    } catch (error) {
        console.error(error);
    }
}



export default async function getStockLive(payload) {
    // const url = 'https://backend.ansuinvest.com/api/web/v1/live-market-info/indexes';  
    const url="http://localhost/stocksage-api/db.php";
    if (payload.limit) {
        payload.limit = parseInt(payload.limit); 
    }

    const options = {   
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
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



