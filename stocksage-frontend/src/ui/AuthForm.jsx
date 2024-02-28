import React, { useState } from 'react';
import { useMutation } from 'react-query';
import { signUpUser, logInUser } from '../services/apiAuth';
import { useStocks } from '../contexts/StocksContexts';
import { json, useNavigate } from 'react-router-dom';
import { AiOutlineStock } from 'react-icons/ai';
import { ToastContainer, toast } from 'react-toastify';

function AuthForm({ type }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  const { setUserLogInStatus,showToast } = useStocks();
  const navigate=useNavigate();
    const mutation = useMutation((userData) => {
        return type === 'signup' ? signUpUser(userData.email, userData.password) : logInUser(userData.email, userData.password);
    }, {
        onSuccess: (data) => {
            // If the API response contains a session ID, store it in localStorage
            if (data.session_id) {
                localStorage.setItem('sessionID', data.session_id);
                setUserLogInStatus(true);
                showToast(data.message);
                navigate(`/home`);
               
            }
            else{   
                if(data.success){
                    showToast(data.message);
                    navigate(`/home`);
                }
                else{
                    toast.error(data.message);
                }
            }
        }
    });

    const handleSubmit = (e) => {
        e.preventDefault();
      
        mutation.mutate({ email, password });
        
    };

    return (
        <div className="authForm box">
          <ToastContainer position='center top'></ToastContainer>
                     <div className="authForm__logo">
                         <div className="authForm__logo__header">
                            <span>StockSage</span>
                            <AiOutlineStock className="icon"></AiOutlineStock>
                         </div>
                         <img src="../public/cuate.png" alt="" />
                     </div>
            <form onSubmit={handleSubmit} >
                <input
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    className='input'
                />
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    className='input'
                />

                <button type="submit" disabled={mutation.isLoading} className='cBtn cBtn--large'>
                    {mutation.isLoading ? `${type === 'signup' ? 'Signing up' : 'Logging in'}...` : type === 'signup' ? 'Sign Up' : 'Log In'}
                </button>
            </form>

           
        </div>
    );
}

export default AuthForm;
