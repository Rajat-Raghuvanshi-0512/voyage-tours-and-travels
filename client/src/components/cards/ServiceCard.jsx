import React from "react";
import { hotel } from "../../constants";

const ServiceCard = () => {
  return (
    <div className="font-roboto w-[300px] shadow-lg rounded-xl">
      <div className="flex justify-center items-center p-3">
        <img src={hotel} alt="" />
      </div>
      <div className="p-4">
        <h4 className="text-2xl font-bold text-center">Affordable Hotels</h4>
        <p className="text-sm mt-4 text-center">
          Get affordable and budget friendly hotels with premium facilities like
          buffet and at prime locations.
        </p>
      </div>
    </div>
  );
};

export default ServiceCard;
