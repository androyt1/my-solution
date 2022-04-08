import React, { useEffect, useState } from "react";
import { loadOrdersRequest } from "./store/actions/orders";
import { useSelector, useDispatch } from "react-redux";
import BiggerScreens from "./components/BiggerScreens";
import SmallerScreens from "./components/SmallerScreens";

const Task = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const dispatch = useDispatch();
  const state = useSelector((state) => state.allOrders);
  const { loading, error, orders } = state;

  useEffect(() => {
    dispatch(loadOrdersRequest());
  }, []);

  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };

  return (
    <div className="u-container min-h-[80vh] ">
      <h1>Please add your task here</h1>
      {loading && <p>...loading</p>}
      {error && <p>{error}</p>}

      <BiggerScreens orders={orders} />
      <SmallerScreens
        orders={orders}
        slideIndex={slideIndex}
        setSlideIndex={setSlideIndex}
        handleClick={handleClick}
      />
    </div>
  );
};

export default Task;
