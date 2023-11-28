import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { CDN_URL } from "../utils/constants";

import { addItem } from "../utils/cartSlice";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();

  const cartItems = useSelector((store) => store.cart.items);

  const handleAddItem = (item) => {
    //dispatch the action
    dispatch(addItem(item));
  };

  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2 m-2 border-b-2 border-gray-300 text-left flex justify-between"
        >
          <div className="w-9/12 ">
            <span className="font-semibold flex">{item.card.info.name}</span>{" "}
            <span className="text-sm">
              ₹{" "}
              {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
            </span>
            <p className="text-xs pt-3">{item.card.info.description}</p>
          </div>

          <div className="w-3/12 p-4 relative">
            <div className="absolute mt-24">
              <button
                className="p-2 bg-orange-400 text-white shadow-lg rounded-lg mx-12 absolute"
                onClick={() => handleAddItem(item)}
              >
                Add+
              </button>
            </div>
            <img
              src={CDN_URL + item.card.info.imageId}
              alt="dish image"
              className="h-32 w-full"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
