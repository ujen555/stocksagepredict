


export default async function getMarketSummary( ) {
  const url = 'http://localhost/stocksage-api/marketsummary.php';

  const options = {
      method: 'GET',
      headers: {
          'Content-Type': 'application/json',
      }
    
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




export  async function getMarketIndices( ) {
  const url = 'http://localhost/stocksage-api/marketindices.php';

  const options = {
      method: 'GET',
      headers: {
          'Content-Type': 'application/json',
      }
    
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



export  async function getForeignExchange( ) {
  const url = 'http://localhost/stocksage-api/foreignExchange.php';

  const options = {
      method: 'GET',
      headers: {
          'Content-Type': 'application/json',
      }
    
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




export  async function getSubIndices( ) {
  const url = 'http://localhost/stocksage-api/subindices.php';

  const options = {
      method: 'GET',
      headers: {
          'Content-Type': 'application/json',
      }
    
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


export  async function getimpactingScripts( ) {
  const url = 'http://localhost/stocksage-api/impactingScripts.php';

  const options = {
      method: 'GET',
      headers: {
          'Content-Type': 'application/json',
      }
    
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
