// apiAuth.js
export async function signUpUser(email, password) {
    const url = 'http://localhost/stocksage-api/signup.php';

    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            email,
            password,
        }),
    };


    
    try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);
        return result;
    } catch (error) {
        console.error("ssd",error);
    }
 
}


export async function logInUser(email, password) {
    const url = 'http://localhost/stocksage-api/login.php';

    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            email,
            password,
        }),
    };


    
    try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);
        return result;
    } catch (error) {
        console.error("ssd",error);
    }
 
}



export async function logOut(session_id) {
    const url = 'http://localhost/stocksage-api/logout.php';

    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            session_id
        }),
    };


    
    try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);
        return result;
    } catch (error) {
        console.error("ssd",error);
    }
 
}
