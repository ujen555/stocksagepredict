import React, { useState, useEffect } from "react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import SignUpForm from "../ui/AuthForm";
import AuthForm from "../ui/AuthForm";
import { ToastContainer } from "react-toastify";



function Login() {
   
    const location = useLocation();
    const [key, setKey] = useState(0);
    

    useEffect(() => {
        setKey(key => key + 1);
    
    }, [location.key]);
 
    return (
        <main key={key}>
             <ToastContainer position="bottom-right"/>
             <AuthForm type={"login"}></AuthForm>   
        </main>
    );
}

export default Login;
