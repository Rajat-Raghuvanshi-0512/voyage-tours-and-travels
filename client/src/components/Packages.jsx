import React from "react";
import MainHeading from "./MainHeading";
import PackageCard from "./cards/PackageCard";

const Packages = () => {
  return (
    <div className="px-20 lg:px-32" id="packages">
      <MainHeading blackText={"Our"} orangeText={"Packages"} />
      <div className="flex gap-10 flex-wrap justify-center">
        {[1, 2, 3, 4].map((item) => (
          <PackageCard key={item} />
        ))}
      </div>
    </div>
  );
};

export default Packages;
