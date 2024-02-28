export async function addStockToFavourite(symbol, sessionID) {
    const url = 'http://localhost/stocksage-api/addfavourites.php';

    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            symbol,
            sessionID
          
        }),
    };

    try {
        console.log("sdf");
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);
        return result;
    } catch (error) {
        console.error("ssd",error);
    }
 
}


export async function deleteStock(symbol, sessionID) {
    const url = 'http://localhost/stocksage-api/deletefavourites.php';

    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            symbol,
            sessionID
          
        }),
    };

    try {
        console.log("sdf");
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);
        return result;
    } catch (error) {
        console.error("ssd",error);
    }
 
}



export async function returnFavourites( sessionID) {
    const url = 'http://localhost/stocksage-api/returnfavourites.php';

    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            sessionID
        }),
    };

    try {
        console.log("sdf");
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);
        return result;
    } catch (error) {
        console.error("ssd",error);
    }
 
}