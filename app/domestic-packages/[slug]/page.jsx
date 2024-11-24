import React from "react";
import domesticData from "@/DomesticData";
import Destination from "../../../components/homePage/InternationalCard";
import DomesticPackg from "@/components/DomesticPackg"

const Page = ({ params }) => {
  const { slug } = params;

  const packageDetails = domesticData[slug];

  if (!packageDetails) {
    return <div>Package not found</div>;
  }

  return (
    <div>
      <DomesticPackg details={packageDetails}/>
       <Destination />
    </div>
  );
};

export default Page;
