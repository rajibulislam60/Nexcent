import React from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Clients from './components/Clients';
import Service from './pages/Service';
import Feature from './pages/Feature';
import CountArea from './components/CountArea';
import Products from './pages/Products';
import Testimonial from './pages/Testimonial';
import Blog from './pages/Blog';

const router = createBrowserRouter([
  {
    path: "/",
    element: "",
  },
]);

const App = () => {
  return (
    <div>
      <RouterProvider router={router} />

      <div>
        <Navbar />
        <Home />
        <Clients/>
        <Service />
        <Feature/>
        <CountArea/>
        <Products/>
        <Testimonial/>
        <Blog/>
      </div>
    </div>
  );
}

export default App