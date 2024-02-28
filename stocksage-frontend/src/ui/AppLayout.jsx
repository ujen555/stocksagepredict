import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Ticker from './Ticker';
import Navbar from './Navbar';
import { ToastContainer, toast } from 'react-toastify';
import { useStocks } from '../contexts/StocksContexts';
import 'react-toastify/dist/ReactToastify.css';

function AppLayout() {

  return (
    <div>
      <Ticker />
      <Navbar />
      <Outlet />
    </div>
  );
}

export default AppLayout;
