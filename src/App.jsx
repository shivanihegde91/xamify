import { useState } from 'react'
import { Outlet,useNavigate} from 'react-router-dom'
import NavBar from './Components/NavBar/Nav'
import authService from "./appwrite/auth";
import { useSelector,useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { login, logout } from "./store/authSlice";


function App() {
  
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector((state) => state.auth.userData);
  const userId = useSelector((state) => state.auth.userId);

  useEffect(() => {
    authService.getCurrentUser().then((userData) => {
      if (userData) {
        dispatch(login({ userData }));
      } else {
        dispatch(logout());
      }
    });
  }, []);

  return (
    <>
    <NavBar />
    <Outlet/>
    </>
  )
}

export default App
