/* eslint-disable no-unused-vars */
import React from "react";
import { TbStarFilled, TbStarHalfFilled } from "react-icons/tb";

const Sections = () => {
  return (
    <div className="my-container">
      <p className="text-center text-color text-5xl font-semibold mt-24 mb-4">
        Our Famous Dishes
      </p>
      <p className="text-center text-indigo-200 text-xl mb-12">
        Try them out to have the best experience
      </p>
      <div className="carousel w-full rounded-2xl">
        <div id="slide1" className="carousel-item relative w-full">
          <img
            src="https://images.unsplash.com/photo-1624726175512-19b9baf9fbd1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            className="w-full h-4/6"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img
            src="https://images.unsplash.com/photo-1576402187878-974f70c890a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1033&q=80"
            className="w-full h-4/6"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img
            src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            className="w-full h-4/6"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img
            src="https://plus.unsplash.com/premium_photo-1677192451109-a7d3762a74fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            className="w-full h-4/6"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>

      <div>
        <p className="text-center text-color text-5xl font-semibold mb-8">Reviews</p>
        <div className="grid lg:grid-cols-3 justify-center items-center gap-4">
          <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
              <p className="font-bold text-2xl ">Shelby Atmos</p>
            </figure>
            <div className="flex justify-center items-center mt-2 text-yellow-500">
              <TbStarFilled />
              <TbStarFilled />
              <TbStarFilled />
              <TbStarFilled />
              <TbStarFilled />
            </div>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Excellent!</h2>
              <p>
                ``They made it just the way i want, great choice of foods they
                have. I`ll keep ordering from them``
              </p>
            </div>
          </div>
          <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
              <p className="font-bold text-2xl ">Jonathon Connors</p>
            </figure>
            <div className="flex justify-center items-center mt-2 text-yellow-500">
              <TbStarFilled />
              <TbStarFilled />
              <TbStarFilled />
              <TbStarFilled />
              <TbStarHalfFilled/>
            </div>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Outstanding!</h2>
              <p>
                ``Very happy with their menu, really enjoyed their food. Can`t wait to try more of their foods``
              </p>
            </div>
          </div>
          <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
              <p className="font-bold text-2xl ">Agatha Walkers</p>
            </figure>
            <div className="flex justify-center items-center mt-2 text-yellow-500">
              <TbStarFilled />
              <TbStarFilled />
              <TbStarFilled />
              <TbStarFilled />
            </div>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Satisfied!</h2>
              <p>
                ``They were a little packed with people when we reached there. But still their service was top notch``
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sections;
