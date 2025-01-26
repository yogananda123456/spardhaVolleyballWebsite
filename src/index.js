import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import Scoring from './components/scoring'; // Correct import path and capitalization
import Home from './components/Home'; // Correct import path and capitalization
import {
    createBrowserRouter,
    RouterProvider, // Change RouteProvider to RouterProvider
    Route,
} from "react-router-dom"
const router = createBrowserRouter([

    {
        path: "/",
        element: <Home />,
    },
    {
        path: "spardha",
        element: <Scoring />, // Correct capitalization
    }

]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 
    <RouterProvider router={router}/> // Change RouteProvider to RouterProvider
  
);
