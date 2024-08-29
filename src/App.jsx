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
import Demo from './components/Demo';
import Footer from './pages/Footer';

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
        <div>
          <Home />
          <Clients />
          <Service />
          <Feature />
          <CountArea />
          <Products />
          <Testimonial />
          <Blog />
          <Demo />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App