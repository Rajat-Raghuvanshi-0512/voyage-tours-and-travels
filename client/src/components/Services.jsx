import React from "react";
import ServiceCard from "./cards/ServiceCard";
import MainHeading from "./MainHeading";

const Services = () => {
  return (
    <div className="px-20 lg:px-32" id="services">
      <MainHeading blackText={"Our"} orangeText={"Services"} />
      <div className="flex gap-7 justify-center flex-wrap">
        {[1, 2, 3, 4].map((item) => (
          <ServiceCard />
        ))}
      </div>
    </div>
  );
};

export default Services;
