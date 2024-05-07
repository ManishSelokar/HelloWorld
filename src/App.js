import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import logo from './logo.svg';
import './App.css';
// import Home from "./components/Home";
import Navbar from './components/Navbar';
import Login from './components/Login';
import Register from './components/Register';
import ForgotPassword from './components/ForgotPassword';
import PersonalDetails from './components/PersonalDetails';
import Home from "./components/Home";
import Users from "./components/Users";
import About from "./components/About";
import Contact from "./components/Contact";
import { useEffect, useState } from "react";
import ExpenseEntryItem from "./components/ExpenseEntryItem";


function App() {
  const [user, setUser] = useState({});
  const [loginStatus, setLoginStatus] = useState(false);

  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");

    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      setUser(foundUser);
      setLoginStatus(true);

    }

  }, [])
  const router = createBrowserRouter([

    { path: "/", element: < Home /> },
    { path: "login", element: < Login loginStatus={loginStatus} setLoginStatus={setLoginStatus} /> },
    { path: "register", element: < Register /> },
    { path: "forgotpassword", element: < ForgotPassword /> },
    { path: "personaldetails", element: < PersonalDetails /> },
    { path: "users", element: < Users /> },
    { path: "about", element: < About /> },
    { path: "contact", element: < Contact /> },
    { path: "expenseentryitem", element: < ExpenseEntryItem /> },

  ]);
  return (
    <>
      <Navbar title={"Dummy-App"} loginStatus={loginStatus} setLoginStatus={setLoginStatus} />
      <RouterProvider router={router} />

      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"

      />



    </>
  );
}

export default App;
