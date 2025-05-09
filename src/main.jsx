import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/store.js';
import './index.css';

import App from './App.jsx';
import AdminDashBaord from './Components/Admin/AdminDashBoard/AdminDashBoard.jsx';
import Home from './Components/Home/Home.jsx';
import Login from './Components/Login/Login.jsx';
import SplashScreen from './Components/Splashscreen/SplashScreen.jsx';
import NavBar from './Components/NavBar/Nav.jsx';
import Hero from './Components/Hero/Hero.jsx';

import UserDashboard from './Components/User/UserDashBoard/UserDashBoard.jsx';
import UserExam from './Components/User/UserDashBoard/UserExam.jsx';
import Userpage from './Components/User/UserDashBoard/Userpage.jsx';
import UserPerformance from './Components/User/UserDashBoard/UserPerformance.jsx';
import UserResult from './Components/User/UserDashBoard/UserResult.jsx';
import UserSettings from './Components/User/UserDashBoard/UserSettings.jsx';
import UserSidebar from './Components/User/UserDashBoard/UserSidebar.jsx';
import AdminResult from './Components/Admin/AdminDashBoard/AdminResult.jsx';
import AdminSettings from './Components/Admin/AdminDashBoard/AdminSettings.jsx';
import ManageUser from './Components/Admin/AdminDashBoard/ManageUser.jsx';
import AdminSidebar from './Components/Admin/AdminDashBoard/AdminSidebar.jsx';
import AdminPerformance from './Components/Admin/AdminDashBoard/AdminPerformance.jsx';
import AdminExam from './Components/Admin/AdminDashBoard/AdminExam.jsx';

import CreateAdminProfile from './Components/Admin/AdminDashBoard/CreateAdminProfile.jsx';
import About from './Components/About/About.jsx';

//import UserSignUp from './Components/SignUp/UserSignUp.jsx';
import ResultDeatils from './Components/Details/ResultDetails.jsx';
import PerformanceDetails from './Components/Details/PerformanceDetails.jsx';
import PerformanceDetails2 from './Components/Details/PerformanceDetails2.jsx';
import ResultDetails2 from './Components/Details/ResultDetails2.jsx';
const router = createBrowserRouter([
  { 
    path: "/",
    element: <App />,
    children: [
      { 
        path: "/",
        element: <SplashScreen />,
      },
      {
        path: "/login",
        element: <Login />,
      },

      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/nav",
        element: <NavBar />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/hero",
        element: <Hero />,
      },
     
      {
        path: "/createadminprofile",
        element: <CreateAdminProfile />,
      },
      {
        path: "/userdashboard",
        element: <UserDashboard />,
      },
      {
        path: "/userexam",
        element: <UserExam />,
      },
      {
        path: "/userpage",
        element: <Userpage />,
      },
      {
        path: "/userperformance",
        element: <UserPerformance />,
      },
      {
        path: "/userresult",
        element: <UserResult />,
      },
      {
        path: "/manageuser",
        element: <ManageUser />,
      },
      {
        path: "/usersettings",
        element: <UserSettings />,
      },
      {
        path: "/admindashboard",
        element: <AdminDashBaord />,
      },
      {
        path: "/adminexam",
        element: <AdminExam />,
      },
      {
        path: "/adminperformance",
        element: <AdminPerformance />,
      },
      {
        path: "/adminresult",
        element: <AdminResult />,
      },
      {
        path: "/adminsettings",
        element: <AdminSettings />,
      },
      {
        path: "/usersidebar",
        element: <UserSidebar />,
      },
      {
        path: "/adminsidebar",
        element: <AdminSidebar />,
      },
      {
        path: "/resultdetails",
        element: <ResultDeatils />,
      },
      {
        path:"/performancedetails",
        element:<PerformanceDetails/>,
      },
      {

        path:"/performancedetails2",
        element:<PerformanceDetails2/>,
      },
      {
        path:"/resultdetails2",
        element:<ResultDetails2/>,
      },


    ]
  }
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
);

export default router;
