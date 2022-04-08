import React from "react";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";

const SmallerScreens = ({ orders, slideIndex, handleClick }) => {
  return (
    <>

    {/* Created a simple carousel that only shows up on small screens */}
      <div
        className="w-full h-[75vh] flex flex-col justify-center items-center
    
    "
      >
        <div className=" w-[350px] relative flex overflow-hidden md:hidden">
          <AiOutlineArrowRight
            className="absolute top-0 bottom-0 m-auto w-[40px] h-[40px] p-2 rounded-full right-1 bg-[#ccc] cursor-pointer z-10"
            onClick={() => handleClick("right")}
          />

          <div
            className={`h-full flex transition-all duration-300 ease-linear translate-x-[${
              slideIndex * -350 + "px"
            }]`}
          >
            {orders &&
              orders.slice(0, 3).map((order) => {
                return (
                  <div
                    key={order.id}
                    className="border-[12px] border-[white] rounded-2xl w-[350px] "
                  >
                    <div className="w-full flex flex-col justify-center items-center ">
                      <img
                        src={order.image}
                        alt={order.name}
                        className="w-2/3"
                      />
                    </div>
                    <div className="w-full flex justify-center items-center bg-white py-10">
                      <div className="flex-3 flex flex-col justify-start items-start ">
                        <p className="text-sm font-bold pl-2">{order.name}</p>
                        <p className="text-xs  text-slate-500 pl-2 mt-2">
                          {order.title}
                        </p>
                      </div>
                      <div className="flex-1 flex justify-end items-center">
                        <p className="text-sm font-slate-600 pr-2">
                          ${order.price}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
          <AiOutlineArrowLeft
            className="absolute  top-0 bottom-0 m-auto w-[40px] h-[40px]  p-2 rounded-full bg-[#ccc] left-1 cursor-pointer z-10"
            onClick={() => handleClick("left")}
          />
        </div>
      </div>
    </>
  );
};

export default SmallerScreens;
