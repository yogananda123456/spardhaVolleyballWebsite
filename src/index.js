import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Scoring from './components/scoring'; // Correct import path and capitalization
import Home from './components/Home'; // Correct import path and capitalization
import Upcoming from './components/Upcoming';
import Results from './components/Results';
import {
    createBrowserRouter,
    RouterProvider, // Change RouteProvider to RouterProvider
} from "react-router-dom"
const router = createBrowserRouter([

    {
        path: "/",
        element: <Home />,
    },
    {
        path: "spardha",
        element: <Scoring />, // Correct c apitalization
    },
    {
        path: "upcoming",
        element: <Upcoming />,
    },
    {
        path: "results",
        element: <Results />,
    }

]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 
    <RouterProvider router={router}/> // Change RouteProvider to RouterProvider
  
);
