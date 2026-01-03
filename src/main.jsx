import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import { createHashRouter, RouterProvider } from 'react-router-dom';

import Home from './Pages/Home.jsx';
import About from './Pages/About.jsx';
import Project from './Pages/Projects.jsx';
import Blog from './Pages/Blog.jsx';
import Err from './Pages/404.jsx';

const router = createHashRouter([
  { path: "/",
    element: <Home />,
    errorElement: <Err />},

  { path: "/about",
    element: <About />,},

  { path: "/projects",
    element: <Project />,},

  { path: "/blog",
    element: <Blog />, }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode> <RouterProvider router={router} /> </React.StrictMode>,
)