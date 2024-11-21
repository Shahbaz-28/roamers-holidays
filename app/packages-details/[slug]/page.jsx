import React from "react";
import travelPackages from "../../../data"; // Ensure correct path to your data file
import TravelPackagesDe from "../../../components/TravelPackagesDe";

const Page = ({ params }) => {
  const { slug } = params;

  const packageDetails = travelPackages[slug];

  if (!packageDetails) {
    return <div>Package not found</div>;
  }

  return (
    <div>
      {/* Pass packageDetails to the child component */}
      <TravelPackagesDe details={packageDetails} />
    </div>
  );
};

export default Page;
