import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { RxHamburgerMenu  } from "react-icons/rx";
import { IoClose } from "react-icons/io5";
import { AiOutlineStock } from "react-icons/ai";
import { useStocks } from "../contexts/StocksContexts";
import { logOut } from "../services/apiAuth";
import { useMutation } from "react-query";

function NavBar() {
  const [click, setClick] = useState(false);
  const navigate = useNavigate();
  const handleClick = () => setClick(!click);
  const { getUserLogInStatus, setUserLogInStatus,showToast  } = useStocks();


  const mutation = useMutation((sessionID) => {
    logOut(sessionID);
  }, {
    onSuccess: (data) => {
        console.log("removing");
        localStorage.removeItem('sessionID');
        setUserLogInStatus(false);
     
    }
  });


  
  const handleLogOut=()=>{
    mutation.mutate( localStorage.getItem('sessionID'));
    setUserLogInStatus(false);
    showToast("Logout Successful");
    navigate(`/home`);
  } ;

  const gotonewLink = () => {
    // Navigate to the relative URL within your application
    window.location.href = 'C:\yujenProjects\stocksagepredict\stocksage-frontend\src\redirect\mock.html';
  }
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <NavLink  exact="true" to="/" className="nav-logo">
            <span>StockSage</span>
            <AiOutlineStock className="icon"></AiOutlineStock>
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                to="/home"
                  className="nav-links "
                onClick={handleClick}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/prediction"
                  className="nav-links"
                onClick={handleClick}
              >
                Prediction
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/marketInfo"
                  className="nav-links"
                onClick={handleClick}
              >
                Market Information
              </NavLink>
            </li>
            <li className="">
              <NavLink
                to="/signup"
                  className="nav-links cBtn"
                onClick={handleClick}
              >
                Sign Up
              </NavLink>
            </li>
            {
              getUserLogInStatus()?
              <li className="">
              <NavLink
              
                  className="nav-links cBtn"
                onClick={handleLogOut}
              >
                Log Out
              </NavLink>
            </li>:
              <li className="">
              <NavLink
                to="/login"
                  className="nav-links cBtn"
                onClick={handleClick}
              >
                Log In
              </NavLink>
            </li>
            }
          
          
            {/* <li className="nav-item">
              <NavLink
                to="/News"
                  className="nav-links"
                onClick={handleClick}
              >
                News
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/contact"
                  className="nav-links"
                onClick={handleClick}
              >
                Our Team 
              </NavLink>
            </li> */}
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            {/* <i className={click ? "fas fa-times" : "fas fa-bars"}></i> */}

            {click ? (
              <span className="icon">
                 <IoClose />
       {" "}
              </span>
            ) : (
              <span className="icon">
                        <RxHamburgerMenu />
              </span>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;