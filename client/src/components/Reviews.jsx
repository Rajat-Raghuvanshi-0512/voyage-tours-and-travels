import React from "react";
import ReviewCard from "./cards/ReviewCard";
import MainHeading from "./MainHeading";

const Reviews = () => {
  return (
    <div className="px-20 lg:px-32 w-full">
      <MainHeading blackText={"Customer"} orangeText={"Reviews"} />
      <div className="flex gap-10 w-full overflow-x-auto ">
        {[1, 2, 3, 4].map((item) => (
          <ReviewCard key={item} />
        ))}
      </div>
    </div>
  );
};

export default Reviews;
