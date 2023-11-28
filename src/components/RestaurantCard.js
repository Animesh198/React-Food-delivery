import React from "react";
import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({ resData }) => {
  //console.log(resData);
  //const { resData } = props;
  const { name, cuisines, avgRating, deliveryTime, costForTwo } = resData?.info;
  return (
    <div className="m-4 p-4 w-[250px] rounded-lg hover:bg-slate-200  shadow-md">
      <img
        className="rounded-xl h-[206px] w-full "
        src={CDN_URL + resData.info.cloudinaryImageId}
        alt="biryani"
      />
      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <h4 className="font-bold pb-3 text-lg">
        ⭐ {avgRating} • {resData.info.sla.deliveryTime} min
      </h4>
      <h4>{costForTwo}</h4>
      <h4>{cuisines.join(", ")}</h4>
    </div>
  );
};

export const withFreedelLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-orange-300 text-white font-semibold m-2 p-2 rounded-lg">
          Free Delivery
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
