import React from "react";

const BiggerScreens = ({ orders }) => {
  return (
    <>
    {/* Used Tailwind Css Responsive Classes to Handle Large and Medium Screen Display */}
      <div className="w-full hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-4  items-center max-h-[40vh]">
        {orders &&
          orders.slice(0, 3).map((order) => {
            return (
              <div
                key={order.id}
                className="border-[12px] border-white  rounded-2xl max-w-md"
              >
                <div className="w-full flex flex-col justify-center items-center ">
                  <img src={order.image} alt={order.name} className="w-2/3" />
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
    </>
  );
};

export default BiggerScreens;
