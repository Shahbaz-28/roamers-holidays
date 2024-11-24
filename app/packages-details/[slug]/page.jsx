import React from "react";
import travelPackages from "@/internationalData";
import TravelPackagesDe from "@/components/TravelPackagesDe"
import DomesticCard from "@/components/homePage/DomesticCard";

const Page = ({ params }) => {
  const { slug } = params;

  const packageDetails = travelPackages[slug];

  if (!packageDetails) {
    return <div>Package not found</div>;
  }

  return (
    <div>
      <TravelPackagesDe details={packageDetails} />
       <DomesticCard/>
    </div>
  );
};

export default Page;
