import React, { useState, useEffect } from "react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import AuthForm from "../ui/AuthForm";


function SignUp() {
    const navigate = useNavigate();
    const location = useLocation();
    const [key, setKey] = useState(0);
    useEffect(() => {
        setKey(key => key + 1);
    }, [location.key]);

    return (
        <main key={key}>
            
             <AuthForm type={"signup"}></AuthForm>   
        </main>
    );
}

export default SignUp;
