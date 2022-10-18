import React from "react";
import { person1 } from "../../constants";

const ReviewCard = () => {
  return (
    <div className="p-7 bg-[#F9F9F9] min-w-[250px] rounded-xl">
      <img
        src={person1}
        alt=""
        className="mx-auto w-16 h-16 rounded-full object-cover"
      />
      <h3 className="text-[#FF8227] font-bold text-2xl text-center my-3">
        Alice ashton
      </h3>
      <p className="text-sm text-center">
        Very nice experience. Loved the hotel and food was of great quality too.
        Everyone in Voyage team were helpful at every point of time.{" "}
      </p>
    </div>
  );
};

export default ReviewCard;
