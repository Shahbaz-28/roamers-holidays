import React from "react";
import travelPackages from "../../../data"; // Ensure correct path to your data file
import TravelPackagesDe from "../../../components/TravelPackagesDe";
import Destination from "../../../components/homePage/Destination";

const Page = ({ params }) => {
  const { slug } = params;

  const packageDetails = travelPackages[slug];

  if (!packageDetails) {
    return <div>Package not found</div>;
  }

  return (
    <div>
      <TravelPackagesDe details={packageDetails} />
       <Destination />
    </div>
  );
};

export default Page;
