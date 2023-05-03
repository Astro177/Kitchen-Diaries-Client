/* eslint-disable no-unused-vars */
import React from "react";
import Header from "./pages/Header";
import { Outlet } from "react-router-dom";
import Footer from "./pages/Footer";

const App = () => {
  return (
    <div>
      <Header />
      <div className='min-h-[calc(100vh-365px)]'>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default App;
