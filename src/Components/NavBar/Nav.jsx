import React from 'react'
import { useNavigate, Link } from "react-router-dom";
import { useSelector,useDispatch } from 'react-redux';
import "./Nav.css";
import authService from "../../appwrite/auth.js";
import { logout as authLogout } from "../../store/authSlice";


function nav() {
  const authStatus = useSelector((state) => state.auth.status); // Get authentication status from Redux
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutUser = async () => {
    try {
      const res = await authService.logout();
      if (res)
      {
        console.log(res);
      dispatch(authLogout()); // Update Redux store
      navigate("/"); // Redirect to home after logout
      }
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <div className='nav'>
        <nav>
        <span className='exam'>
        <img src ="/logo2.png" alt="logo" className='logo'/>
        xamify</span>
        <div className='list'>
            <ul>
            <li><Link to={"/home"}> Home </Link></li>
            <li><Link to={"/about"}> About</Link></li>
            {!authStatus ?(<>
            <li><Link to={"/login"}> Login</Link></li>
            </>
            ):(
              <>
              <button onClick={(e)=>logoutUser()}>logout</button>
              </>
            )
          }
            </ul>
            </div>
        </nav>
    </div>
  )
}

export default nav