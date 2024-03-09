import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './components/pages/Home.jsx';
import './index.css'
import {RouterProvider, createBrowserRouter } from 'react-router-dom';
import ErrorPage from './components/pages/ErrorPage.jsx';
import LearnMore from './components/pages/LearnMore.jsx';
import Login from './components/pages/Login.jsx';
import SignUp from './components/pages/SignUp.jsx';
import Search from './components/pages/Search.jsx';
import User from './components/pages/User.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>,
    errorElement: <ErrorPage/>
  },
  {
    path: '/learn-more',
    element: <LearnMore/>
  },
  {
    path: '/log-in',
    element: <Login/>
  },
  {
    path: '/sign-up',
    element: <SignUp/>
  },
  {
    path: '/search',
    element: <Search/>
  },
  {
    path: '/user',
    element: <User/>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
)
