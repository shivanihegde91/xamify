import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import NavBar from './Components/NavBar/Nav';
import authService from "./appwrite/auth";
import { useSelector, useDispatch } from 'react-redux';
import { login, logout } from "./store/authSlice";
import { Box } from '@mui/material';  // ⬅️ Add this for spacing

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    authService.getCurrentUser().then((userData) => {
      if (userData) {
        const isAdmin =userData.prefs?.isAdmin === true || userData.prefs?.isAdmin === "true";
        dispatch(
          login({
            userData,
            userId: userData.$id,
            isAdmin,
          })
        );
      } else {
        dispatch(logout());
      }
    });
  }, []);

  return (
    <>
      <NavBar />
      <Box sx={{ mt: '70px', px: 2 }}>  {/* ⬅️ Margin to avoid navbar overlap */}
        <Outlet />
      </Box>
    </>
  );
}

export default App;
