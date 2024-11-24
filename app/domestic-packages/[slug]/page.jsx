import React from "react";
import domesticPackages from "../../../domesticData";
import Destination from "../../../components/homePage/InternationalCard";
import DomesticPackg from "@/components/DomesticPackg";

const Page = ({ params }) => {
  const { slug } = params;

  const packageDetails = domesticPackages[slug];

  if (!packageDetails) {
    return <div>Package not found</div>;
  }

  return (
    <div>
      <DomesticPackg details={packageDetails} />
      <Destination />
    </div>
  );
};

export default Page;
