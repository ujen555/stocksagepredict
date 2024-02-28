export  async function getStockNews(symbol) {
    const url = `https://backend.ansuinvest.com/api/web/v1/news/list`;

    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            "page": 1,
            "limit": 6,
            "sort": "DESC",
            "sort_field": "news_id",
            "news_status": "News",
            "category_id": "1",
            "fields": [
                {
                    "field": "string",
                    "operator": "contains or matches",
                    "value": "string"
                }
            ]
        }),
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

