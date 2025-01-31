import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
 import People from './components/people'; // Correct import path and capitalization
 import Gallery from './components/Gallery'; // Correct import path and capitalization
import Home from './components/Home'; // Correct import path and capitalization
import Upcoming from './components/Upcoming';
import Results from './components/Results';

import {
    createBrowserRouter,
    RouterProvider, // Change RouteProvider to RouterProvider
} from "react-router-dom"
import Live from './components/Live';
const router = createBrowserRouter([

    {
        path: "/",
        element: <Home />,
    },
    {
        path: "spardha/live",
        element: <Live />, // Correct c apitalization
    },
    {
        path: "spardha/upcoming",
        element: <Upcoming />,
    },
    {
        path: "spardha/results",
        element: <Results />,
    },
    {
        path: "people",
        element: <People />,
    },
    {
        path: "Gallery",
        element: <Gallery />,
    }

]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 
    <RouterProvider router={router}/> // Change RouteProvider to RouterProvider
  
);
